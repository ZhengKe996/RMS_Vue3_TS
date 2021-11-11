/**
 * 账号登录的验证规则
 */

export const rules = {
  name: [
    { required: true, message: 'Please input Username', trigger: 'blur' },
    { min: 6, max: 12, message: 'Username must be 6-12 in length', trigger: 'blur' },
    { pattern: /^[a-z0-9A-Z]{6,12}$/, message: ' Username must be alphanumeric', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input Password', trigger: 'blur' },
    { min: 6, max: 12, message: 'Password must be 6-12 in length', trigger: 'blur' },
    { pattern: /^[a-z0-9A-Z]{6,12}$/, message: 'Password must be alphanumeric', trigger: 'blur' }
  ]
}
