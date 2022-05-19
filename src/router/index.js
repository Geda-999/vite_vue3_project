import { createRouter, createWebHistory } from "vue-router";

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
