import { request } from '../utils'

export async function query (params) {
  alert("get all region")
  return request('http://139.59.95.113:8080/allRegion', {
    method: 'get',
    data: params
  })
}

export async function create (params) {
  //alert("region service")
  //delete params.key;
  console.log("params = ",params)
  return request('http://139.59.95.113:8080/addRegion', {
    method: 'post',
    data: params
  })
}

export async function remove (params) {
  return request('/api/users', {
    method: 'delete',
    data: params
  })
}

export async function update (params) {
  return request('/api/users', {
    method: 'put',
    data: params
  })
}
