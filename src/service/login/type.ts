/**
 *  IAccount:定义请求的参数类型
 *  IDataType:定义返回数据的参数类型，可传入数据内部的类型
 *  ILoginResult:定义返回数据内部的类型
 */
export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface Department {
  id: number
  name: string
  parentId?: any
  createAt: Date
  updateAt: Date
  leader: string
}

export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}
