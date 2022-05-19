<template>
	<div>About</div>
	<div>
		<div class="a"></div>
	</div>
	<div>
		<div class="myclass">
			用来存放我们全局的 css 变量，我们在variables.scss先只配置一个主题色：
		</div>
		<div class="myclassf0f">
			用来存放我们全局的 css 变量，我们在index.scss先只配置一个主题色：
		</div>
	</div>
	<div>
		<div
			class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
		>
			<img
				class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
				src="@/assets/logo.png"
				alt="Woman's Face"
			/>
			<div class="text-center space-y-2 sm:text-left">
				<div class="space-y-0.5">
					<p class="text-lg text-black font-semibold">Erin Lindford</p>
					<p class="text-slate-500 font-medium">Product Engineer</p>
				</div>
				<button
					class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
				>
					Message
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.myclass {
	color: $theme-color;
}
.myclassf0f {
	color: $theme-color-f0f;
}
.a {
	width: 100px;
	height: 100px;
	background: blue;
	margin: 0 auto;

	//&是父选择器标识符
	&:hover {
		background: red;
	}

	//属性嵌套
	border: 1px solid #000 {
		left: 25px solid #000;
		right: 50px solid #000;
	}
}
</style>
