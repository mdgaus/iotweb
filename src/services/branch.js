import { request } from '../utils'

export async function query (params) {
  return request('http://139.59.95.113:8080/allBranch', {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  return request('http://139.59.95.113:8080/addBranch', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('http://139.59.95.113:8080/deleteBranch', {
    method: 'delete',
    data: params
  })
}

export async function update (params) {

  return request('http://139.59.95.113:8080/editBranch', {
    method: 'post',
    data: params
  })
}
