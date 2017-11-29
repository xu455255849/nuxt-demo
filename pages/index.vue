<template>
  <div class="container">
    <p class="title">Hellp World!</p>
    <p class="title" @click="link">切换页面</p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import a from '../components/loading.vue'
  export default {
    middleware: 'auth',  //定义页面中间件
    head () {
      return {
        title: '首页'
      }
    },
    methods: {
      link () {
        this.$router.push({ name: 'other' })
      }
    },
  
    
  }
</script>


