import {defineStore} from "pinia";
import connection from "@/utils/connection";
import useCache from "@/utils/cache";

const useMovieStore = defineStore('movie', {
  state: () => ({
    query: '',
    items: [],
    favourites: [],
    currentPage: 1,
    totalPages: 1,
    isFetching: false
  }),
  actions: {
    async search() {
      this.isFetching = true
      useCache(async () => {
        const {data} = await connection.request({
          method: 'get',
          params: {s: this.query, page: this.currentPage}
        })
        if (!data || !data.Search) {
          return {Search: [], totalResults: 0}
        }
        this.items = data.Search
        return data
      }, {s: this.query, page: this.currentPage})
        .then(response => {
          this.items = response.Search
          this.totalPages = Math.floor(response.totalResults / this.items.length)
        })
        .finally(() => this.isFetching = false)
    },
    initializeState(params) {
      this.currentPage = params.page || 1;
      this.query = params.q || 'q';
    },
    resetSearch(){
      this.items = []
      this.currentPage = 1
      this.totalPages = 1
    }
  }
})

export default useMovieStore
