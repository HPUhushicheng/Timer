import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import ZhuYe from '../components/ZhuYe.vue';
import Register from '../components/Register.vue';
import TodayTime from '../components/TodayTime.vue';
import WeekTime from '../components/WeekTime.vue';
import DongTai from '../components/DongTai.vue';
import SiteChart from '../components/SiteChart.vue';
import QQ from '../components/qq.vue';
import Theme from '../components/Theme.vue';

// 定义路由
const routes = [
  { path: '/', component: Login },
  { path: '/zy', component: ZhuYe },
  {path:'/register', component: Register},
  {path:'/todaytime',component:TodayTime},
  {path:'/weektime',component:WeekTime},
  {path:'/dongtai',component:DongTai},
  {path:'/sitechart',component:SiteChart},
  {path:'/qq',component:QQ},
  {path:'/theme',component:Theme},
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/ZhuYe.vue'),
    meta: {
      title: '智能文档审阅平台'
    }
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/components/Doc.vue'),
    meta: {
      title: '文档编辑器'
    }
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
