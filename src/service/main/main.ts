import ownRequest from '@/service'
import type { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return ownRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return ownRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return ownRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return ownRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}
