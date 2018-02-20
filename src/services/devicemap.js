import { request } from '../utils'
import {BASE_URL} from '../CommonMethods/api'

export async function query (params) {
  console.log("params", params)
  return request(BASE_URL+'/allDeviceHistoryData', {
    method: 'get',
    data: params
  })
}
