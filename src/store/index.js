/**
 * Created by admin on 2017/4/7.
 */
import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import dashboard from './modules/dashboard'
import menu from './modules/menu'
import product from './modules/product'
import localUser from './modules/localUser'
import land from './modules/land'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    dashboard,
    menu,
    product,
		localUser,
    land
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
