/*Created 2017/4/20*/

import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$ajax = axios;

const state = {
	filterParam:{
		user: ""
	},
	localUser:[
		{
			id: '1',
			user: '安徽省合肥市快乐农场',
			people: '张三',
			phone: '12345678910',
			district: '合肥市',
			address: '安徽省合肥市长江西路130号'
		},
		{
			id: '2',
			user: '安徽省合肥市悲伤农场',
			people: '李四',
			phone: '12345678910',
			district: '合肥市',
			address: '安徽省合肥市长江西路130号'
		},{
			id: '3',
			user: '安徽省合肥市天天快乐农场',
			people: '王二',
			phone: '12345678910',
			district: '合肥市',
			address: '安徽省合肥市长江西路130号'
		}],
	currentUser:{}
};

const getters = {
	filterUser: state => {
		const filterUser = [];
		for(const value of state.localUser){
			if (value.user.indexOf(state.filterParam.user)>-1) {
        filterUser.push(value);
      }
		}
		return filterUser;
	}
};

const mutations = {
	filterParamInit(state,filterParam) {
    state.filterParam = filterParam;
    console.log(state.filterParam)
  },
	addUser:state => {
		return state.localUser.push(state.localUser[0]);
	},
	delUser:state => {
		return state.localUser.splice(1,1);
	}
};

const actions = {
	addUserAsync(context){
		return new Promise((resolve,reject) =>{
			setTimeout(()=> {
				context.commit('addUser');
				resolve();
			},3000)
		})
	},
	delUserAsync(context){
		return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('delUser');
        resolve();
      },3000)
    })
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}
