<template>
  <h1>IMDB Movies DB Search</h1>
  <v-text-field variant="outlined" type="search" label="Search query" v-model="moviesStore.query"></v-text-field>
</template>
<script setup lang="ts">
import useSearch from './Hooks'
const {moviesStore}  = useSearch()
</script>
