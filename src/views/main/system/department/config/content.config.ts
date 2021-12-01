export const contentTableConfig: any = {
  title: '部门列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '80' },
    { prop: 'leader', label: '部门领导', minWidth: '80' },
    { prop: 'parentId', label: '上级部门', minWidth: '80', slotName: 'parentId' },
    { prop: 'createAt', label: '创建时间', minWidth: '180', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '180', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ]
}
