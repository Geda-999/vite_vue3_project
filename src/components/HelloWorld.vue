<script setup>
import { ref } from "vue";
// import MyIcon from "@/assets/example.svg?component";

defineProps({
	msg: String,
});

const count = ref(0);
</script>

<template>
	<h1>{{ msg }}</h1>
	<!-- <MyIcon /> -->
	<i-mdi-account-reactivate style="font-size: 2em; color: red" />

	<el-button>Default</el-button>
	<el-button type="primary">Primary</el-button>
	<el-button type="success">Success</el-button>
	<el-button type="info">Info</el-button>
	<el-button type="warning">Warning</el-button>
	<el-button type="danger">Danger</el-button>
	<el-button>中文</el-button>

	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
		+
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
	</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank">
			Vite Documentation
		</a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
	</p>

	<button type="button" @click="count++">count is: {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<style scoped>
a {
	color: #42b983;
}
</style>
