/**
 * Created by admin on 2017/4/7.
 */

import Vue from 'vue'
import axios from 'axios'
// import api from '../../../config/api'
Vue.prototype.$ajax = axios;

const state = {
  count: 0,
  color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769']
};

const getters = {

};

const actions = {
  //模拟登陆
  login ({commit}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        withCredentials: true,
        url: 'http://121.43.227.180:8080/v21/web/doLogin',
        params: {
          username: '15715519199',
          password: 'bb-care.com.cn'
        }
      })
      .then(response => {
        response = response.data;
        console.log(response);
        resolve();
      })
      .catch(error => {
        console.log(error);
        reject();
      });
    })
  },
  async getBabyList ({ dispatch, commit }) {
    await dispatch('getWindowBabyList'); // 等待窗口期宝宝列表加载
  },
  //获取窗口期宝宝列表
  getWindowBabyList ({commit}) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        withCredentials: true, // 默认的
        url: 'http://121.43.227.180:8080/v21/power/followUser/pcList',
        params: {
          followQueueId:'',
          page:1,
          rows:16,
          searchNote:'',
          withinRange:1
        }
      })
      .then(response => {
        const  list = response.data.rows;
        resolve();
      });
    })
  },
};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
