import type { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'state',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        { title: '在线', value: '1' },
        { title: '离线', value: '0' }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间'
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '8px 40px'
  }
}
