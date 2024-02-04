import useMovieStore from "@/stores/movie";

export default function () {
  const moviesStore = useMovieStore()
  return {moviesStore}
}
