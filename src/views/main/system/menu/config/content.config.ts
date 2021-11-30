export const contentTableConfig: any = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '80' },
    { prop: 'type', label: '类型', minWidth: '80', slotName: 'type' },
    { prop: 'url', label: '路径', minWidth: '80' },
    { prop: 'permission', label: '权限', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '160', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '160', slotName: 'updateAt' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  childrenProps: {
    rowkey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}
