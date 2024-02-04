import {defineStore} from "pinia";
import connection from "@/utils/connection";

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
      const {data} = await connection.request({
        method: 'get',
        params: {s: this.query, page:this.currentPage}
      })
      if(!data || !data.Search){
        return {Search: [], totalResults: 0}
      }
      this.items = data.Search
      return data
    }
  }
})

export default useMovieStore
