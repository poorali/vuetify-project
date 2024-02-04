<template>
  <v-container>
    <span>
      <!--
       Please consider adding a watch method for changing query state  and then you  should run your search function with specific delay after user has ended typing
       The reason: With the current code whenever query changes, you function will run. So imagine your code sending 10 request to the api when users type a movie name
       with 10 letters. The good practice would be adding a short delay then sending or running query function

       You can use loadash debounce method or write your own debounce helper function using window.setTimeout and callback method
       -->
      <v-text-field variant="outlined" type="search" label="Search query" v-model="query"></v-text-field>
      <!-- Try to pass current page and total pages number to the vuetify data tabe pagination then set a v-model as the pagination controller to implement navigate functionality
       using your search function
       Also you adding loading spinner until data is fetching would be a good practice

       Another thing is you can render movie image and is favourite status using vuetify custom headers and items. to show actual image or a heart icon to show favourite status
       -->
      <v-data-table :items="items"></v-data-table>

      <!--
        This part of your code can be a function and then you can call the function in onclick event listener. Also consider adding favourite functionality for all items
        not just the first one.
        Also instead of calling find method twice you can check the isfacourite method by using javascript includes function
      -->
      <v-btn @click="fs.find(f=>f.title===items[0].title).fav = !fs.find(f=>f.title===items[0].title).fav">Toggle favourite status of first entry</v-btn>
      <div class="mt-4"><b>Favourite movies</b></div>

      <!--
       This part of your code can get converted to a computed method for better usage in several places and readablity (Converting it to a separate option is a good thing too)
       --->
      {{ fs.filter(f=>f.fav).map(f=>f.title).join(',')}}
    </span>
  </v-container>
</template>

<script setup lang="ts">
/**
 * It is always a good practice to split logical parts, templates and styles to 3 separate files for your components like below:
 * Implementation.vue //Template and vue codes
 * Hooks.js ///Logical parts of your component
 * Style.module.css //css styles
 *
 * This will improve the maintainiblity and readabilty of your components so next time you can understand them easier (Imagine a component with 1000 line of codes!!!)
 */
import {reactive, ref} from 'vue'

const query = ref<string | boolean>('')
//You can convert this one interface
const items = ref<Record<string, any>[]>([
  {
    poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    title: 'Pulp Fiction',
    year: 1994,
    isFavourite: true,
  },
])
//As I said earlier you can convert this object to the one that holds just an array of the movie names then you can easily access the favourites movies using .includes
//Also in term of consistancy please set same key for objects in all parts of your code e.g(fave, isFavourite) can converted to isFavourite for both
const fs = reactive([{title: 'Pulp Fiction', fav: true}, {title: 'Twilight Saga', fav: false}])
</script>

<style>
span {
  display: block;
  box-sizing: border-box;
  padding: 5px;
}
</style>
