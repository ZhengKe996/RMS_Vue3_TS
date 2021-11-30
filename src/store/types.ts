import type { ILoginState } from './login/types'
import type { IMainState, IDashboardState } from './main/types'

export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  loginModule: ILoginState
  mainModule: IMainState
  dashboardModule: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
