<template>
  <div id="app">
    <img class="img" src="/static/img/bg_img_cn.jpg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  font-size: 2.5vw;
  margin-bottom: 3rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .img{
  width: 100vw;
  height: 140vh;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.8;
  z-index: -1000;
}
</style>
