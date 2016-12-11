import Vue from 'vue'
import store from './vuex/store'
import VueRouter from 'vue-router';
import routes from './routers';
/* eslint-disable no-new */

Vue.use(VueRouter);
const router = new VueRouter({
	routes
});

new Vue({
	store,
	router,
	el: '#app',
})
