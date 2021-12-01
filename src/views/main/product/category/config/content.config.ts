export const contentTableConfig: any = {
  title: '类别列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '类别名称', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
