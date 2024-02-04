import useMovieStore from "@/stores/movie";
import {debounce} from "@/utils/debounce";
import {watch} from "vue";

export default () => {
  const moviesStore = useMovieStore();
  //500ms delay would be better
  const debouncedSearch = debounce(() => {
    moviesStore.search();
  }, 500)
  const getMovies = () => {
    if (moviesStore.query.trim().length > 2) {
      debouncedSearch()
    }else{
      moviesStore.resetSearch()
    }
  }
  watch(() => moviesStore.query, () => getMovies())
  return {moviesStore}
}
