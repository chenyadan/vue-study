// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'   /*数据交互*/
import layout from './components/layout.vue' /*根文件*/
import IndexPage from './pages/index.vue' /* 首页*/
import DetailPage from './pages/detail.vue' /* 详情*/
import DetailAna from './pages/detail/analysis.vue' 
import DetailCou from './pages/detail/count.vue'
import DetailFor from './pages/detail/forecast.vue'
import DetailPul from './pages/detail/publish.vue'
/*import App from './App'
import router from './router'*/
Vue.use(VueRouter)
Vue.use(VueResource)
let router=new VueRouter({
	mode:'history', /*去掉hush值*/
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:DetailPage,
			redirect:'/detail/analysis',
			children:[
				{
				path:'analysis',
				component:DetailAna				
				},			
				{
				path:'count',
				component:DetailCou			
				},
				{
				path:'forecast',
				component:DetailFor		
				},								
				{
				path:'publish',
				component:DetailPul			
				}			

			]
		}		
	]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:'<layout/>',
  components:{layout}
})
