import request from '@/utils/request'

const api = {
  list: '/demo/list',
  testlist: '/test/list',
  create: '/demo/create',
  actions: '/demo/actions',
}

export default api

export function getFoo(params) {
  return request({
    url: api.list,
    method: 'get',
    params,
  })
}

export function postBar(data) {
  return request({
    url: api.create,
    method: 'post',
    data,
  })
}

export function getTest(params) {
  return request({
    url: api.testlist,
    method: 'get',
    params,
  })
}

export function getActions(params) {
  return request({
    url: api.actions,
    method: 'get',
    params,
  })
}
