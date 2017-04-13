import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Vuex from 'vuex'
import axios from 'axios'
import ElementUI from 'element-ui'
import $ from 'jquery'
import 'element-ui/lib/theme-default/index.css'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(BaiduMap, {
  ak: 'WNCcZKp6HBWkbPMjFTPZS4bWwXGvTI1A'
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
