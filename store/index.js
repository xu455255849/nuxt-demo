import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  
  state: {
    columns1: [
      {
        title: '标题',
        key: 'title'
      },
      {
        title: '介绍',
        key: 'intro'
      },
      {
        title: '日期',
        key: 'time'
      }
    ],
    data1: [],
    user: 'xu' //如果为空，则会中间件控制跳转404
  },
  mutations: {
    SET_LIST: (state, data) => {
      state.data1 = data
    },
  }
})

export default store
