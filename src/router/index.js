import { createRouter, createWebHistory } from "vue-router";
// import NProgress from "nprogress";

const Home = () => import("@/view/Home.vue");
const About = () => import("@/view/About.vue");

const routes = [
	{
		path: "/",
		redirect: "/home",
	},
	{
		path: "/home",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
];

export default createRouter({
	//将实例暴露出去
	history: createWebHistory(), //设置路由模式
	routes,
});

// router.beforeEach((to, from, next) => {
// 	// 开启进度条
// 	NProgress.start();
// 	next();
// });

// router.afterEach(() => {
// 	// 关闭进度条
// 	NProgress.done();
// });
