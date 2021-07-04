import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/packages/theme-chalk/src/base.scss'
import 'normalize.css/normalize.css'
import {useElementPlus} from "./plugins/elementPlus"
import router from "./router"
import "./assets/css/all.css"
import { setupStore } from "./store";
import "./permission.ts"
import "./design/element.css"

const app = createApp(App)
useElementPlus(app)
setupStore(app)
app.use(router)
app.mount('#app')
