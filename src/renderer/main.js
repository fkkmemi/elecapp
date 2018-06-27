import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import { remote } from 'electron'
import path from 'path'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'

Vue.use(Vuetify)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const dbPath = path.join(remote.app.getPath('appData'), 'elecapp', 'test.db')
const Datastore = require('nedb')
const db = new Datastore({ filename: dbPath })
db.loadDatabase((err) => {
  if (err) console.log(err)
})
Vue.prototype.$db = db

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
