/**
 * Created by admin on 2017/4/10.
 */
import Vue from 'vue'
import axios from 'axios'
// import api from '../../../config/api'
Vue.prototype.$ajax = axios;

const state = {
  menu:[
    {"name":"平台基础模块","children":[
      {"name":"首页","children":[]},{"name":"组织管理","children":[]},{"name":"角色管理","children":[]}
    ]},
    {"name":"溯源系统","children":[
      {"name":"基本模块","children":[
        {"name":"地块信息"},{"name":"产品信息"}
      ]},
      {"name":"生产台账","children":[
        {"name":"地块信息"},{"name":"产品信息"}
      ]}
    ]},
    {"name":"物联网监控系统","children":[]},
    {"name":"大数据监管系统","children":[]}
  ],
  menuIcon:["glyphicon-home","glyphicon-tasks","glyphicon-user","glyphicon glyphicon-file","glyphicon-blackboard"]
};

const getters = {

};

const actions = {

};

const mutations = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
