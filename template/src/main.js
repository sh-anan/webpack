{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Moment from 'moment'
import FastClick from 'fastclick'
{{#router}}
import router from './router'
{{/router}}
{{#vuex}}
import store from './store'
{{/vuex}}
import { LoadingPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin } from 'vux'
import './assets/css/app.scss'
Vue.use(VueAxios, Axios)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body)
  }, false)
}

Vue.filter('moment', function(value, formatString) {
  formatString = formatString || 'YYYY-MM-DD'
  return Moment(value).format(formatString)
})
Vue.filter('moment1', function(value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return Moment(value).format(formatString)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
