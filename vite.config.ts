import { fileURLToPath, URL } from 'node:url'
import  IconsResolver from 'unplugin-icons/resolver'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      
    }),
    AutoImport ({
    imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
    resolvers: [
      ElementPlusResolver(),

      // Auto import icon components
      // 自动导入图标组件
      IconsResolver({
        prefix: 'Icon',
      }),
    ],
    dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
  }),
    Components({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            enabledCollections: ['ep'],
          }),
        ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})



