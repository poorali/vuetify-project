import {useRoute, useRouter} from "vue-router";
import useMovieStore from "@/stores/movie";
import {onMounted, watch} from "vue";

export default function () {
  //Handle Adding search query to the url for refresh functionality
  const router = useRouter()
  const route = useRoute()
  const moviesStore = useMovieStore()
  onMounted(() => moviesStore.initializeState(route.query))
  watch(() => moviesStore.currentPage, () => updateUrlParams())
  watch(() => moviesStore.query, () => updateUrlParams())
  //Add to url param
  const updateUrlParams = () => {
    const query = {};

    if (moviesStore.currentPage > 1) {
      query.page = moviesStore.currentPage;
    }

    if (moviesStore.query.trim().length > 2) {
      query.q = moviesStore.query;
    }
    router.push({query})
  }
}
