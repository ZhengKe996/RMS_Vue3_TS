<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="name">CoCo</span>
        <!-- <span class="name">{{ name }}</span> -->
        <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitClick">退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>关于我们</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import loaclCache from '@/utils/cache'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.loginModule.userInfo.name)
    const router = useRouter()
    const handleExitClick = () => {
      loaclCache.deleteCache('token')
      loaclCache.deleteCache('userMenus')
      loaclCache.deleteCache('userInfo')
      router.push('/main')
    }
    return { name, handleExitClick }
  }
})
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  .name {
    margin-right: 8px;
  }
}
</style>
