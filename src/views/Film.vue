<template lang="html">
  <div id="">
    <film-list :films="films" :favourites="favourites"></film-list>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList.vue'
export default {
  name: 'film',
  props: ["films", "favourites"],
  components: {
    "film-list": FilmList
  }
}
</script>

<style lang="css" scoped>
</style>
