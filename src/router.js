import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index/index.vue'),
      children: [
        {
          path: 'recommended/:name',
          name: 'recommended',
          component: () => import('./views/Index/recommended.vue'),
          props: true
        },
        {
          path: 'backend/:name',
          name: 'backend',
          component: () => import('./views/Index/backend.vue'),
          props: true
        },
        {
          path: 'frontend/:name',
          name: 'frontend',
          component: () => import('./views/Index/frontend.vue'),
          props: true
        },
        {
          path: 'android/:name',
          name: 'android',
          component: () => import('./views/Index/android.vue'),
          props: true
        },
        {
          path: 'ai/:name',
          name: 'ai',
          component: () => import('./views/Index/ai.vue'),
          props: true
        },
        {
          path: 'ios/:name',
          name: 'ios',
          component: () => import('./views/Index/ios.vue'),
          props: true
        },
        {
          path: 'freebie/:name',
          name: 'freebie',
          component: () => import('./views/Index/freebie.vue'),
          props: true
        },
        {
          path: 'career/:name',
          name: 'career',
          component: () => import('./views/Index/career.vue'),
          props: true
        },
        {
          path: 'article/:name',
          name: 'article',
          component: () => import('./views/Index/article.vue'),
          props: true
        },
        {
          path: '/',
          redirect: '/recommended/recommended'
        }
      ]
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/Books/index.vue'),
      children:[
        {
          path: '',
          name: 'book',
          component: () => import('./views/Books/book.vue')
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('./views/Books/me.vue')
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('./views/Books/pay.vue')
        },
        {
          path: '*',
          redirect: '/books'
        }
      ]
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events/index.vue')
    }
  ]
})
