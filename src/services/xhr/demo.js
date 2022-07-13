import request from '@/utils/request'

const api = {
  list: '/demo/list',
  testlist: '/test/list',
  create: '/demo/create',
  actions: '/demo/actions',
  randomLogo: '/prod/logo_random_self',
  allTypeTree: '/prod/all_type_tree',
  productDailyRecommends: '/prod/get_product_daily_recommends',
}

export default api

export function getFoo(params) {
  return request({
    url: api.list,
    method: 'get',
    params,
  })
}

export function getLogo() {
  return request({
    url: api.randomLogo,
    method: 'get',
  })
}

export function getProductDailyRecommends() {
  return request({
    url: api.productDailyRecommends,
    method: 'get',
  })
}
export function getAllTypeTree() {
  return request({
    url: api.allTypeTree,
    method: 'get',
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
