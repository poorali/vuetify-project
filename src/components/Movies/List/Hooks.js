import useMovieStore from "@/stores/movie";
import {debounce} from "@/utils/debounce";
import {watch} from "vue";

export default function () {
  const moviesStore = useMovieStore()
  //Custom headers for datatable
  const headers = [
    {
      title: 'Poster',
      value: 'Poster',
    },
    {
      title: 'Title',
      value: 'Title',
    },
    {
      title: 'Release Year',
      value: 'Year',
    }
  ]
  watch(() => moviesStore.currentPage, () => {
    debounce(() => {
      moviesStore.search()
    }, 500)()
  })
  return {moviesStore,headers}
}
