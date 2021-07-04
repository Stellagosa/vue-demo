import { ConfigEnv, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'
import { viteMockServe } from "vite-plugin-mock";
// import {wrapperEnv} from "./src/utils/env";

export default ({ command }: ConfigEnv): UserConfigExport => {

  const root = process.cwd()
  // const env = loadEnv(mode, root)
  // const viteEnv = wrapperEnv(env)

  // const {
  //     VITE_APP_BASE_URL
  // } = viteEnv

  return {
    resolve: {
      alias: {
        "@": resolve(__dirname, '/src'),
        "#": resolve(__dirname, '/types')
      }
    },
    plugins: [
      vue(),
      styleImport({
        libs: [ {
          libraryName: 'element-plus',
          resolveStyle: (name) => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${ name }.scss`
            // return `element-plus/lib/theme-chalk/${name}.css`
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${ name }`
          }
        } ]
      }),
      viteMockServe({
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: false,
      })
    ]
  }
}



