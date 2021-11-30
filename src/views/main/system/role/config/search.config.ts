import type { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色权限',
      placeholder: '请输入角色权限'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间'
    }
  ],
  labelWidth: '80px'
}
