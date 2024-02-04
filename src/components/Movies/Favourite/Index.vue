<template>
  <div class="flex flex-column" v-if="Object.keys(moviesStore.favourites).length">
    <h2>Favourite Movies</h2>
    <div class="d-flex flex-row flex-wrap">
      <v-col v-for="item in moviesStore.favourites" :key="item.Title" cols="12" md="3">
        <v-card :image="item.Poster" height="250px" class="mr-3 mt-2 pa-0 d-flex flex-column">
        <Like :item="item" class="ml-auto mr-2 mt-2"/>
        <v-card-title v-text="item.Title" class="text-white mt-auto"></v-card-title>
        </v-card>
      </v-col>
    </div>
  </div>
</template>
<script setup lang="ts">
import useFavourite from './Hooks'
import Like from '@/components/Movies/Like'
const {moviesStore} = useFavourite()
</script>
