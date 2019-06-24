<template lang="html">
  <div>
    <ul>
      <film-list-item v-for="(film, index) in films" :film="film" :favourites="favourites" :key="index"></film-list-item>
    </ul>
  </div>

</template>

<script>
import FilmListItem from './FilmListItem.vue';
export default {
  name: 'film-list',
  props: ['films', 'favourites'],
  components: {"film-list-item": FilmListItem}
}
</script>

<style lang="css" scoped>
</style>
