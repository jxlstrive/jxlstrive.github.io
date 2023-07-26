<template>
  <div>
    <h1>富文本编辑器</h1>
    <!-- 声明路由链接（https://blog.csdn.net/fusheng_cn/article/details/127830102） -->
    <!-- <router-link to="/wangEditor">wangEditor</router-link>&nbsp;
    <router-link to="/quillEditor">quillEditor</router-link> -->
    
    <!-- 嵌套路由 -->
    <router-link to="/helloWorld/tab1">wangEditor   111111111</router-link>&nbsp;
    <router-link to="/helloWorld/tab2">quillEditor</router-link>
    
    <!-- 声明路由的占位符 -->
    <router-view></router-view>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" id="1"/> -->
  </div>
</template>

<!-- <script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script> -->

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  a {
    display: inline-block;
    margin-bottom: 10px;
  }
  h1 {
    margin-bottom: 10px;
    color: #42b983;
  }
   /* 默认的高亮 class 类 */
  .router-link-active {
    color: #1890ff;
  }
  .router-active {
    color: green;
  }
</style>
