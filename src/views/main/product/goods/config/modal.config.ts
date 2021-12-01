import type { IForm } from '@/base-ui/form/types'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价',
      placeholder: '请输入原价'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价',
      placeholder: '请输入现价'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '商品图片（url地址）',
      placeholder: '请输入图片的url'
    },
    {
      field: 'status',
      type: 'select',
      label: '商品状态',
      placeholder: '请选择商品状态',
      options: [
        { title: '在售', value: 1 },
        { title: '下架', value: 0 }
      ]
    },
    {
      field: 'address',
      type: 'input',
      label: '发货地',
      placeholder: '请输入发货地'
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}
