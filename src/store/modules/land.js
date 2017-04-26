/**
 * Created by admin on 2017/4/20.
 */

import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios;

const state = {
  title:[
    {"name":"ID","alia":"id"},
    {"name":"生产企业名称","alia":"companyName"},
    {"name":"地块名称","alia":"landName"},
    {"name":"地块负责人","alia":"charger"},
    {"name":"海拔","alia":"height"},
    {"name":"联系方式","alia":"phone"},
    {"name":"经度","alia":"jd"},
    {"name":"纬度","alia":"wd"},
    {"name":"面积","alia":"area"},
    ],
  landList:[
    {
      id: '1',
      companyName: '黄山小荷里茶业有限公司',
      landName: '谭家桥茶林场6队',
      charger: '叶增明',
      height: '100',
      phone: '联系方式',
      jd: '东经E118°16′48.34″',
      wd:'北纬N30°07′20.48″',
      area:'921亩'
    }, {
      id: '2',
      companyName: '黄山小荷里茶业有限公司',
      landName: '谭家桥茶林场6队',
      charger: '叶增明',
      height: '100',
      phone: '联系方式',
      jd: '东经E118°16′48.34″',
      wd:'北纬N30°07′20.48″',
      area:'921亩'
    }, {
      id: '3',
      companyName: '黄山小荷里茶业有限公司',
      landName: '谭家桥茶林场6队',
      charger: '叶增明',
      height: '100',
      phone: '联系方式',
      jd: '东经E118°16′48.34″',
      wd:'北纬N30°07′20.48″',
      area:'921亩'
    }, {
      id: '4',
      companyName: '六安瓜片',
      landName: '谭家桥茶林场6队',
      charger: '叶增明',
      height: '100',
      phone: '联系方式',
      jd: '东经E118°16′48.34″',
      wd:'北纬N30°07′20.48″',
      area:'921亩'
    },{
      id: '5',
      companyName: '六安瓜片',
      landName: '谭家桥茶林场6队',
      charger: '叶增明',
      gender: '男',
      phone: '联系方式',
      jd: '东经E118°16′48.34″',
      wd:'北纬N30°07′20.48″',
      area:'921亩'
    }],
  land:{},
  currentIndex:'',
  filterKey:'',
  showDialog:false
};

const getters = {

};

const actions = {

};

const mutations = {
  //添加地块信息
  addLand(state, payLoad){
    state.landList.push(payLoad.land);
  },
  //改变弹窗显示状态
  updateShowDialog(state){
    state.showDialog = !state.showDialog;
  },
  //改变地块信息
  updateLand(state, payLoad){
    state.land = payLoad.land;
  },
  //删除地块信息
  delLand(state){
    let list = state.landList;
    let landId = state.land && state.land.id;
        for (let i=0;i<list.length;i++){
          if (list[i].id === landId){
            list.splice(i, 1);
            state.land = {};
          }
        }
    return list;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
