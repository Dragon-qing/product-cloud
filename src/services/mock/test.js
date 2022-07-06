import Mock from 'mockjs2'
import { builder, getQueryParameters } from '@/mock/util'

const totalCount = 5701
const names = ['唐僧', '八戒', '悟空', '沙僧', '诸葛亮']
const list = (options) => {
    const parameters = getQueryParameters(options)

    const result = {}
    const pageNo = parseInt(parameters.pageNo)
    const pageSize = parseInt(parameters.pageSize)
    const totalPage = Math.ceil(totalCount / pageSize)
    result.list = Array.from(Array(5).keys()).map((index) => ({
        key: 1 + index + '',
        name: names[index],
        age: Math.floor(Math.random() * 10 + 1),
    }))
    return builder({
        pageSize: pageSize,
        pageNo: pageNo,
        totalCount: totalCount,
        totalPage: totalPage,
        data: result,
    })
}
Mock.mock(/\/demo\/test/, 'get', list)
