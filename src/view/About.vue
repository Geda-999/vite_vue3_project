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
