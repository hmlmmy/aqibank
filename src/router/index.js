// src/router/index.js  
import { createRouter, createWebHistory } from 'vue-router';  
import HomePage from '@/views/HomePage.vue'; // 使用 @ 符号来引用 src 目录下的文件  
  
const routes = [  
  {  
    path: '/',  
    name: 'Home',  
    component: HomePage,  
  },  
  // 在这里添加更多的路由  
];  
  
const router = createRouter({  
  history: createWebHistory(process.env.BASE_URL),  
  routes,  
});  
  
export default router;