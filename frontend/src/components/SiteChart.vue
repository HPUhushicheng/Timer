<template>
  <div class="site-chart-container">
    <div class="header">
      <h1 class="title">座次表</h1>
      <p class="subtitle">遇见每一位独特的灵魂</p>
      <button @click="goToHome" class="back-btn">返回主页</button>
    </div>


    <div class="avatar-grid">
      <div class="grid-container">
        <div v-for="(student, index) in students" 
             :key="index" 
             class="avatar-card"
             :class="{ 'is-online': student.isOnline }"
             @mouseenter="handleHover(index)"
             @mouseleave="handleLeave(index)">
          <div class="avatar-wrapper">
            <el-avatar 
              :size="80" 
              :src="student.avatar" 
              class="avatar"
              :class="{ 'pulse': student.isOnline }">
              {{ student.name.charAt(0) }}
            </el-avatar>
            <div class="status-dot" :class="{ 'online': student.isOnline }"></div>
          </div>
          <div class="student-info">
            <h3 class="student-name">{{ student.name }}</h3>
            <p class="student-id">学号: {{ student.id }}</p>
            <p class="student-status">
              {{ student.isOnline ? '在线学习中' : '离线' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import axios from 'axios'
import {useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/zy')
}
// 获取学生数据的函数
const fetchStudents = async () => {
  try {
    const response = await axios.get('http://47.120.68.44:666/list/all')
    const studentData = response.data
    
    // 将获取的数据映射为需要的格式
    students.value = studentData.map(student => ({
      studentid: student.id,
      name: student.name,
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk={student.qq}&s=3',
      isOnline: false // 默认设置为离线状态
    }))
  } catch (error) {
    console.error('获取学生数据失败:', error)
  }
}

// 组件挂载时获取数据
onMounted(() => {
  fetchStudents()
})

// 模拟学生数据
const students = ref([
  {
    studentid: '2021001',
    name: '张三',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    isOnline: true
  },
  {
    studentid: '2021002',
    name: '李四',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    isOnline: false
  },
  {
    studentid:'20240523',
    name:'李华',
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=3',
    isOnline: false
  },
  {
    studentid: '20240524',
    name: '王明',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    isOnline: true
  },
  {
    studentid: '20240525', 
    name: '赵云',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    isOnline: false
  },
  {
    studentid: '20240526',
    name: '陈晨',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png', 
    isOnline: true
  },
  {
    studentid: '20240527',
    name: '杨洋',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    isOnline: false
  },
  {
    studentid: '20240528',
    name: '周周',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    isOnline: true
  }
  // 添加更多学生数据...
])

const handleHover = (index) => {
  //students.value[index].isOnline = true;
  const card = document.querySelectorAll('.avatar-card')[index];
  if (card) {
    card.style.transform = 'scale(1.1)';
    card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
  }
  // 处理悬停效果
}

const handleLeave = (index) => {
  //students.value[index].isOnline = false;
  const card = document.querySelectorAll('.avatar-card')[index];
  if (card) {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
  }

  // 处理离开效果
}
</script>

<style scoped>
.site-chart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.header {
  text-align: center;
  margin-bottom: 60px;
}

.title {
  font-size: 36px;
  color: #2c3e50;
  margin-bottom: 12px;
  font-weight: 600;
}

.subtitle {
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
}

.back-btn {
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  background: #409EFF;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #66b1ff;
  transform: translateY(-2px);
}

.avatar-grid {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 每行4个卡片 */
  gap: 30px;
  max-width: 1000px; /* 限制最大宽度 */
  width: 100%;
}

.avatar-card {
  width: 220px; /* 固定卡片宽度 */
  height: 280px; /* 固定卡片高度 */
  margin: 0 auto; /* 居中对齐 */
  background: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  position: relative;
  overflow: hidden;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

.avatar {
  border: 4px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.status-dot {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #909399;
  border: 2px solid #fff;
}

.status-dot.online {
  background: #67C23A;
}

.student-info {
  margin-top: 15px;
}

.student-name {
  font-size: 18px;
  color: #2c3e50;
  margin: 0 0 5px;
}

.student-id {
  font-size: 14px;
  color: #909399;
  margin: 0 0 5px;
}

.student-status {
  font-size: 14px;
  color: #67C23A;
}

.is-online .avatar {
  border-color: #67C23A;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(103, 194, 58, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(103, 194, 58, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(103, 194, 58, 0);
  }
}

.pulse {
  animation: pulse 2s infinite;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* 中等屏幕每行3个 */
  }
  
  .avatar-card {
    width: 200px;
    height: 260px;
  }
}

@media (max-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 小屏幕每行2个 */
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr); /* 超小屏幕每行1个 */
  }
  
  .avatar-card {
    width: 180px;
    height: 240px;
  }
}
</style>
