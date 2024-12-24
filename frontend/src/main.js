// import { createApp } from 'vue';
// import App from './App.vue';
// import './assets/global.less';
// import components from './components/global';
// import router from './router';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { createPinia } from 'pinia';

// const app = createApp(App)
// app.config.productionTip = false

// // components
// for (const i in components) {
//   app.component(i, components[i])
// }
// const pinia = createPinia();

// app.use(router).use(pinia).use(ElementPlus).mount('#app')
import { createApp } from 'vue'
import './assets/global.less';
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'; // 引入路由
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
app.use(ElementPlus)
app.use(router)
app.mount('#app')