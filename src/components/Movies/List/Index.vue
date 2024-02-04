<template>
  <v-data-table density="compact" :headers="headers" :items="moviesStore.items" :loading="moviesStore.isFetching">
    <template v-slot:bottom>
      <v-pagination total-visible="6" :page="moviesStore.currentPage" :length="moviesStore.totalPages"
                    v-model="moviesStore.currentPage"></v-pagination>
    </template>

    <template v-slot:item="{item}">
      <tr>
        <td>
          <v-img cover :src="item.Poster" v-if="item.Poster && item.Poster !== 'N/A' " class="w-50 my-1"/>
          <span v-else>-</span>
        </td>
        <td>{{ item.Title }}</td>
        <td>{{ item.Year }}</td>
      </tr>
    </template>
  </v-data-table>
</template>
<script setup lang="ts">
import useList from './Hooks'

const {moviesStore, headers} = useList();
</script>
