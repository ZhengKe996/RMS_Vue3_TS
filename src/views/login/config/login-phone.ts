/**
 * 手机号登录的验证规则
 */

export const rules = {
  number: [
    { required: true, message: 'Please input PhoneNumber', trigger: 'blur' },
    { min: 11, max: 11, message: 'PhoneNumber contains 11 digits', trigger: 'blur' },
    { pattern: /^[0-9]{11}$/, message: 'PhoneNumber must be number', trigger: 'blur' }
  ],
  code: [
    { required: true, message: 'Please input verifyCode', trigger: 'blur' },
    { min: 6, max: 6, message: 'VerifyCode contains 6 digits', trigger: 'blur' },
    { pattern: /^[0-9]{6}$/, message: 'VerifyCode must be number', trigger: 'blur' }
  ]
}
