// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './styling'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

/* Scroll to */
Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
