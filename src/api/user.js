import { getAction } from '@/api/manage'

// 获取用户信息
const getUserList = () => getAction('/getUserList')

export {
  getUserList
}
