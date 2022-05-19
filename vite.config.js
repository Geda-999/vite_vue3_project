import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// 自动按需引入 vue\vue-router\pinia 等的 api
import AutoImport from "unplugin-auto-import/vite";
// 自动按需引入 第三方的组件库组件 和 我们自定义的组件
import Components from "unplugin-vue-components/vite";

// element - plus;
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 这个插件可以让我们支持 jsx 写法
// import vueJsx from "@vitejs/plugin-vue-jsx";

import svgLoader from "vite-svg-loader";

// 是一个非常优秀的图标库，里面集成了很多的图标
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vitejs.dev/config/
export default defineConfig({
	// plugins: [vue()],
	// 别名设置
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"), // 把 @ 指向到 src 目录去
		},
	},
	// 服务设置
	server: {
		host: true, // host设置为true才可以使用network的形式，以ip访问项目
		port: 8080, // 端口号
		open: false, // 自动打开浏览器
		cors: true, // 跨域设置允许
		strictPort: true, // 如果端口已占用直接退出
		// 接口代理
		proxy: {
			"/api": {
				// 本地 8000 前端代码的接口 代理到 8888 的服务端口
				target: "http://localhost:8888/",
				changeOrigin: true, // 允许跨域
				rewrite: (path) => path.replace("/api/", "/"),
			},
		},
	},
	plugins: [
		vue(),
		svgLoader(),
		// ...
		AutoImport({
			dts: "./src/auto-imports.d.ts",
			imports: ["vue", "vue-router"], //, "pinia", "vue-router", "@vueuse/core"
			// Generate corresponding .eslintrc-auto-import.json file.
			// eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
			eslintrc: {
				enabled: true, // Default `false`
				filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
				globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
			},
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			dts: "./src/components.d.ts",
			// imports 指定组件所在位置，默认为 src/components
			dirs: ["src/components/"],
			resolvers: [ElementPlusResolver(), IconsResolver()],
		}),
		Icons({
			compiler: "vue3",
			autoInstall: true,
		}),
	],
	build: {
		brotliSize: false,
		// 消除打包大小超过500kb警告
		chunkSizeWarningLimit: 2000,
		// 在生产环境移除console.log
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
		},
		assetsDir: "static/assets",
		// 静态资源打包到dist下的不同目录
		rollupOptions: {
			output: {
				chunkFileNames: "static/js/[name]-[hash].js",
				entryFileNames: "static/js/[name]-[hash].js",
				assetFileNames: "static/[ext]/[name]-[hash].[ext]",
			},
		},
	},
	// 用来存放我们全局的 css 变量，我们先只配置一个主题色：
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
      @import "@/assets/styles/variables.scss";
      @import "@/assets/styles/index.scss";
    `,
				javascriptEnabled: true,
			},
		},
	},
});
