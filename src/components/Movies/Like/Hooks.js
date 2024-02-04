import useMovieStore from "@/stores/movie";
import {computed} from "vue";

export default function (props) {
  const moviesStore = useMovieStore()
  const isFavourite = computed(() => {
    return moviesStore.favourites[props.item.Title]
  })
  return {moviesStore, isFavourite}
}
