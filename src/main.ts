import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// 导入element-plus图标
import * as Icons from "@element-plus/icons-vue";
// 注册所有图标
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

// 导入element-plus组件库
import ElementPlus from 'element-plus'
app.use(ElementPlus)

// 导入element-plus样式
import 'element-plus/dist/index.css'

// 导入element-plus增强组件库
import LwxTestUI from 'lwx-test-ui'
app.use(LwxTestUI)

import 'lwx-test-ui/dist/lib/styles.css'

app.mount('#app')
