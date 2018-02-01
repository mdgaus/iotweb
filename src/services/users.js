import { request } from '../utils'

export async function query (params) {
  return request('http://139.59.95.113:8080/allZone', {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  return request('http://139.59.95.113:8080/addZone', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('http://139.59.95.113:8080/deleteZone', {
    method: 'delete',
    data: params
  })
}

export async function update (params) {

  return request('http://139.59.95.113:8080/editZone', {
    method: 'post',
    data: params
  })
}
