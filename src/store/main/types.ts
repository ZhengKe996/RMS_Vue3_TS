export interface IMainState {
  /* system */
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  menuList: any[]
  menuCount: number
  departmentList: any[]
  departmentCount: number
  /* product */
  goodsList: any[]
  goodsCount: number
  categoryList: any[]
  categoryCount: number
}

export interface IDashboardState {
  categoryGoodsCount: any[]
  categoryGoodsSale: any[]
  categoryGoodsFavor: any[]
  addressGoodsSale: any[]
}
