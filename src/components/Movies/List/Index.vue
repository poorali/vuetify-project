<template>
  <v-data-table :items="moviesStore.items"></v-data-table>
</template>
<script setup lang="ts">
import useList from './Hooks'

const {moviesStore} = useList();
</script>
