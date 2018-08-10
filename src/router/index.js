import Vue from 'vue'
import Router from 'vue-router'
// Components
import home from '@/components/home'
import about from '@/components/about'
import portfolio from '@/components/portfolio'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/about',
			name: 'about',
			component: about
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: portfolio
		}
	]
})
