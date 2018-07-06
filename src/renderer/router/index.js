import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome-view',
      component: require('@/components/WelcomeView').default
    },
    {
      path: '/inspire',
      name: 'inspire',
      component: require('@/components/InspireView').default
    },
    {
      path: '/test',
      name: 'test',
      component: require('@/components/test').default
    },
    {
      path: '/testFile',
      name: 'testFile',
      component: require('@/components/testFile').default
    },
    {
      path: '/testDB',
      name: 'testDB',
      component: require('@/components/testDB').default
    },
    {
      path: '/testUI',
      name: 'testUI',
      component: require('@/components/testUI').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
