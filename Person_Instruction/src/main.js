// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {WOW} from 'wowjs'
import animate from 'animate.css'
import echarts from "echarts"
import ElementUI from 'element-ui';
import ele from 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new WOW({live: false}).init();
Vue.use(animate);
Vue.use(ElementUI);
Vue.use(ele);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
