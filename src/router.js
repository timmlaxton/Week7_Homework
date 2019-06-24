import Vue from 'vue';
import Router from 'vue-router';
import Film from '@/views/Film';
import Favourite from '@/views/Favourite'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    }
  ]

})
export default router;
