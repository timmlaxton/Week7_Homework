<template>
  <div id="app">
    <h1>GhibliFilms</h1>

    <div class="">
<nav> <router-link :to="{name: 'film'}">Films</router-link>
  | <router-link :to="{name: 'favourite'}">Favourite</router-link>
</nav>
 </div>
 <router-view :films="films" :favourites="favourites" id="view"></router-view>
</div>

</template>

<script>
import {eventBus} from '@/main.js'
import FilmList from './components/FilmList.vue'

export default {
  name: 'app',
  data(){
    return {
      films: [],
      favourites: []
    }
  },
mounted(){
  fetch("https://ghibliapi.herokuapp.com/films")
  .then(res => res.json())
  .then(films => this.films = films)

  eventBus.$on('film-selected',(film) => {
    this.favourites.push(film)
  })
},
components: {
  "film-list": FilmList
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
