<template>
  <div class="container">
    <p class="title">数据展示!</p>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  
  export default {
    middleware: 'auth',  //定义页面中间件
    head () {
      return {
        title: '其他页面'
      }
    },
    data () {
      return {}
    },
    async fetch ({ store, params }) {
      let { data } = await axios.get('http://106.14.205.222/article/list?page=1&limit=10&isActive=1')
      console.log( data )
      store.commit('SET_LIST', data.list)
    },
    computed: {
      ...mapState([
        // 映射 this.xxx 为 store.state.xxx
        'columns1',
        'data1'
      ])
    },
  }
</script>

