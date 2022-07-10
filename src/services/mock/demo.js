import Mock from 'mockjs2'
import { builder, getQueryParameters, getBody } from '@/mock/util'

const totalCount = 5701

const actions = (options) => {
  const parameters = getQueryParameters(options)
    const activityEvents = {
      year: [2022, 2022, 2022, 2022, 2022, 2022, 2022],
      day: [6, 2, 21, 8, 30, 19, 29],
      month: [6, 6, 6, 6, 5, 7, 5],
      title: [
        '大会-武汉站',
        'CIO成长计划--数字化转型能力进阶',
        '数字化时代 ToB企业的增长思维',
        '	葡萄城低代码和 BI 产品新版发布会',
        '联想智慧办公发布会',
        'EDIA2022企业数智应用大会暨第七届SaaS应用大会',
        'Tapdata LDP 产品发布暨开源说明会',
      ],
    }
    const result = {}
    const pageNo = parseInt(parameters.pageNo)
    const pageSize = parseInt(parameters.pageSize)
    const totalPage = Math.ceil(totalCount / pageSize)
    result.list = Array.from(Array(7).keys()).map((index) => ({
        key: 1 + index + '',
        title: activityEvents.title[index],
        day: activityEvents.day[index],
        year: activityEvents.year[index],
        month: activityEvents.month[index],
    }))
    return builder({
        pageSize: pageSize,
        pageNo: pageNo,
        totalCount: totalCount,
        totalPage: totalPage,
        data: result.list,
    })
}

const list = (options) => {
  const parameters = getQueryParameters(options)

  const result = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result,
  })
}

const create = (options) => {
  const body = getBody(options)
  console.log('mock 服务接收到的 Bar 表单提交值:', body)

  // 模拟数据库创建失败
  const randomNumber = Math.random() // (inclusive of 0, but not 1)
  const success = randomNumber > 0.4

  if (success) {
    return builder(
      {
        id: Mock.mock('@guid'),
        ...body,
      },
      '',
      200,
      { 'Custom-Header': Mock.mock('@guid') }
    )
  }
  return builder(
    {
      ...body,
    },
    '',
    500,
    { 'Custom-Header': Mock.mock('@guid') }
  )
}

Mock.mock(/\/demo\/list/, 'get', list)
Mock.mock(/\/demo\/actions/, 'get', actions)
Mock.mock(/\/demo\/create/, 'post', create)
