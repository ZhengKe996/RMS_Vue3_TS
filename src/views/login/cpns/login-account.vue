<template>
  <div>
    <div class="login-account">
      <el-form label-position="right" label-width="auto" :rules="rules" :model="account" status-icon ref="formRef">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="account.name" />
        </el-form-item>

        <el-form-item label="密 &nbsp;&nbsp;&nbsp;码" prop="password">
          <el-input show-password v-model="account.password" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/login-account'
import type { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('username') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAccount = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        // 判断账号密码的格式是否正确
        if (valid) {
          // 判断是否需要记住密码
          if (isKeepPassword) {
            localCache.setCache('username', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('username')
            localCache.deleteCache('password')
          }

          // 开始登录验证
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }

    return { account, formRef, rules, loginAccount }
  }
})
</script>

<style scoped></style>
