import { request } from '../utils'

export async function query (params) {
  return request('http://139.59.95.113:8080/allAsset', {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  return request('http://139.59.95.113:8080/addAsset', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('http://139.59.95.113:8080/deleteAsset', {
    method: 'delete',
    data: params
  })
}

export async function update (params) {
  console.log("response", params)
  return request('http://139.59.95.113:8080/editAsset', {
    method: 'post',
    data: params
  })
}
