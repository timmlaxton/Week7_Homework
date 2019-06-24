<template lang="html">
  <div id="">
    <h1>Favourite</h1>
    <film-list :films="favourites" :favourites="favourites"></film-list>
</div>

  </template>

<script>
import FilmList from '@/components/FilmList.vue'
export default {
  props: ['favourites'],
  components: {
    'film-list':FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
