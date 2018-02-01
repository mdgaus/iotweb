import { request } from '../utils'

export async function query (params) {
  return request('http://139.59.95.113:8080/allRegion', {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  return request('http://139.59.95.113:8080/addRegion', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('http://139.59.95.113:8080/deleteRegion', {
    method: 'delete',
    data: params
  })
}

export async function update (params) {

  return request('http://139.59.95.113:8080/editRegion', {
    method: 'post',
    data: params
  })
}
