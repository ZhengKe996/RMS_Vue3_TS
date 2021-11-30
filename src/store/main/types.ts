export interface IMainState {
  /* system */
  usersList: any[]
  usersCount: number
  roleList: any[]
  roleCount: number
  menuList: any[]
  menuCount: number
  /* product */
  goodsList: any[]
  goodsCount: number
}

export interface IDashboardState {
  categoryGoodsCount: any[]
  categoryGoodsSale: any[]
  categoryGoodsFavor: any[]
  addressGoodsSale: any[]
}
