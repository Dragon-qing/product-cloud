import request from '@/utils/request'

const api = {
  list: '/demo/list',
  testlist: '/test/list',
  create: '/demo/create',
  actions: '/demo/actions',
  randomLogo: '/prod/logo_random_self',
  allTypeTree: '/prod/all_type_tree',
  getAuthorHead: '/prod/get_author_head',
  authorWorksShow: '/prod/author_works_show',
  company: '/prod/company',
  typeTree: '/prod/type_tree',
  authorProductAndTree: '/prod/author_product_and_tree',
  productDailyRecommends: '/prod/get_product_daily_recommends',
  searchByType: '/prod/search_by_type',
  product: '/prod/product',
  searchByKeyword: 'prod/search_by_keyword',
  getLabelNames: 'prod/get_label_names',
}

export default api

export function getAuthorSelfIntro(data) {
  return request({
    url: api.getAuthorHead,
    method: 'get',
    params: data,
  })
}
export function getLabelNames(data) {
  return request({
    url: api.getLabelNames,
    method: 'get',
    params: data,
  })
}
export function getSearchByKeyword(data) {
  return request({
    url: api.searchByKeyword,
    method: 'get',
    params: data,
  })
}
export function getProduct(data) {
  return request({
    url: api.product,
    method: 'get',
    params: data,
  })
}
export function getSearchByType(data) {
  return request({
    url: api.searchByType,
    method: 'get',
    params: data,
  })
}
export function getTypeTree(data) {
  return request({
    url: api.typeTree,
    method: 'get',
    params: data,
  })
}
export function getCompany(data) {
  return request({
    url: api.company,
    method: 'get',
    params: data,
  })
}
export function getauthorProductAndTree(data) {
  return request({
    url: api.authorProductAndTree,
    method: 'get',
    params: data,
  })
}

export function getAuthorWorksShow(data) {
  return request({
    url: api.authorWorksShow,
    method: 'get',
    params: data,
  })
}

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
