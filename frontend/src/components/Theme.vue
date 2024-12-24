<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentTheme = ref(0);

const themes = [
  {
    path: '/zy',
    background: 'linear-gradient(to right, #a6e2b9 0%, #eceab7 100%)'
  },
  {
    path: '/todaytime',
    background: 'linear-gradient(to right,#EBEAFF, #B6D4FF,#CAEFF6)'
  },
  {
    path: '/weektime', 
    background: 'linear-gradient(to right, #FFE4E1, #FFF0F5, #E6E6FA)'
  },
  {
    path: '/dongtai',
    background: 'linear-gradient(to right, #E0FFFF, #F0FFFF, #F5FFFA)'
  }
];

function changeTheme() {
  currentTheme.value = (currentTheme.value + 1) % themes.length;
  const theme = themes[currentTheme.value];
  
  // 设置背景
  document.body.style.backgroundImage = theme.background;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  
  // 跳转到对应页面
  router.push(theme.path);
}
</script>

<template>
  <div class="theme-container">
    <el-button type="primary" @click="changeTheme" class="theme-btn">
      切换主题和页面
    </el-button>
  </div>
</template>

<style scoped>
.theme-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.theme-btn {
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
</style>
