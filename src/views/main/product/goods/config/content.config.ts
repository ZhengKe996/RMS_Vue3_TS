export const contentTableConfig: any = {
  title: '商品列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '80' },
    { prop: 'oldPrice', label: '原价', minWidth: '80' },
    { prop: 'newPrice', label: '现价', minWidth: '100' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    { prop: 'status', label: '商品状态', minWidth: '100', slotName: 'status' },
    { prop: 'address', label: '发货地', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
