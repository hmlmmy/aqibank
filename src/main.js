// src/main.js  
import { createApp } from 'vue';  
import App from './App.vue';  
import router from './router'; // 假设你有一个名为 router 的文件来配置路由  
import ElementPlus from 'element-plus';  
import 'element-plus/dist/index.css'
  
const app = createApp(App);  
  
app.use(router);  
app.use(ElementPlus);
  
app.mount('#app');