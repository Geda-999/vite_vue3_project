import vue from "@vitejs/plugin-vue";
// 自动按需引入 vue\vue-router\pinia 等的 api
import AutoImport from "unplugin-auto-import/vite";
// 自动按需引入 第三方的组件库组件 和 我们自定义的组件
import Components from "unplugin-vue-components/vite";

// const defaultClasses = "prose prose-sm m-auto text-left";

export default (env) => {
	return [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
		vueJsx(),
		svgLoader(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
		AutoImport({
			dts: "./src/auto-imports.d.ts",
			imports: ["vue"], //, "pinia", "vue-router", "vue-i18n", , "@vueuse/core"
			// Generate corresponding .eslintrc-auto-import.json file.
			// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
			eslintrc: {
				enabled: true, // Default `false`
				filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
			// resolvers: [ElementPlusResolver()],
		}),
		Components({
			dts: "./src/components.d.ts",
			extensions: ["vue", "md"],
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			// imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
			dirs: ["src/components/"],
			// resolvers: [
			// 	ElementPlusResolver(),
			// 	IconsResolver(),
			// 	VueUseComponentsResolver(),
			// ],
		}),
		Icons({
			compiler: "vue3",
			autoInstall: true,
		}),

		PkgConfig(),
		OptimizationPersist(),
	];
};
