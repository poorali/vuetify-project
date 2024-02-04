<template>
  <v-btn variant="flat" :icon="isFavourite ? 'mdi-heart':'mdi-heart-outline'"
         @click="moviesStore.toggleFavourite(item)"/>
</template>
<script setup lang="ts">
import useLike from './Hooks'

const props = defineProps(['item'])
const {moviesStore, isFavourite} = useLike(props)
</script>
