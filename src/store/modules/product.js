/**
 * Created by admin on 2017/4/14.
 */

import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios;

const state = {
  filterParam:{
    name:""
  },
  productList:[
    {
      id: '12987122',
      name: '六安瓜片',
      category: '茶叶',
      desc: '清香口味',
      address: '六安',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987123',
      name: '黄山毛峰',
      category: '茶叶',
      desc: '清香口味',
      address: '黄山',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987125',
      name: '浙江龙井',
      category: '茶叶',
      desc: '清香口味',
      address: '浙江',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }, {
      id: '12987126',
      name: '福建普洱',
      category: '茶叶',
      desc: '清香口味',
      address: '福建',
      shop: '王小虎夫妻店',
      shopId: '10333'
    }],
  product:{}
};

const getters = {
  filterList: state => {
    // state.productList.splice(1,1);
    const filterList = [];
    for (const value of state.productList) {
      if (value.name.indexOf(state.filterParam.name)>-1) {
        filterList.push(value);
      }
    }
    return filterList;
  },
	/*A:state => {
		return [{
			id: '1',
			user: '22222',
			people: '负责222人姓名',
			phone: '333',
			district: '合444肥市',
			address: '安徽省合肥市长江西路130号'
		}]
	}*/
};

const actions = {
  addProductAsync (context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('addProduct');
        resolve();
      },3000)
    })
  },
  delProductAsync (context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('delProduct');
        resolve();
      },3000)
    })
  }
};

const mutations = {
  filterParamInit(state,filterParam) {
    state.filterParam = filterParam;
    console.log(state.filterParam)
  },
  addProduct:state => {
    return state.productList.push(state.productList[0]);
  },
  delProduct:state => {
    return state.productList.splice(1,1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
