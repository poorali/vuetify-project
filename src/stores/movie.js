import {defineStore} from "pinia";

const useMovieStore = defineStore('movie', {
  state: () => ({
    query: '',
    items: [],
    favourites: [],
    currentPage:1,
    totalPages:1,
    isFetching: false
  })
})

export default useMovieStore
