import ownRequest from '../index'
import type { IDataType } from '@/service/types'

enum DashboardAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsFavor = '/goods/category/favor',
  categoryGoodsSale = '/goods/category/sale',
  addressGoodsSale = '/goods/address/sale'
}

export function getAmountList() {
  return ownRequest.get<IDataType>({
    url: DashboardAPI.amountList
  })
}

export function getCategoryGoodsCount() {
  return ownRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsCount
  })
}
export function getCategoryGoodsFavor() {
  return ownRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsFavor
  })
}
export function getCategoryGoodsSale() {
  return ownRequest.get<IDataType>({
    url: DashboardAPI.categoryGoodsSale
  })
}
export function getAddressGoodsSale() {
  return ownRequest.get<IDataType>({
    url: DashboardAPI.addressGoodsSale
  })
}
