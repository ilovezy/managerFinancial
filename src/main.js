// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';

import App from './App'
import router from './router'

Vue.use(ElementUI);
Vue.config.productionTip = true


// TODO 这里用 webpack打包处理掉
import _ from 'underscore'
import $ from 'jquery'
window._ = _
window.$ = $

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
