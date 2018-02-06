import { request } from '../utils'

export async function query (params) {
  return request('http://139.59.95.113:8080/allAssetType', {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  return request('http://139.59.95.113:8080/addAssetType', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('http://139.59.95.113:8080/deleteAssetType', {
    method: 'post',
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
