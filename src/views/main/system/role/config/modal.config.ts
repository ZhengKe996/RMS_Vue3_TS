import type { IForm } from '@/base-ui/form/types'

export const modalConfig: IForm = {
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
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
