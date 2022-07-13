<template>
  <div>
    <div v-if="isEmptyObj(dataInfo)">
      <Empty />
    </div>
    <div v-else>
      <a-descriptions
        :stlye="{ marginTop: '20px' }"
        :title="item.product_name"
        bordered
        v-for="(item, index) in dataInfo.product"
        :key="index"
      >
        <a-descriptions-item label="产品名称">{{ item.product_name }}</a-descriptions-item>
        <a-descriptions-item label="解决方案"> {{ item.solution }}</a-descriptions-item>
        <a-descriptions-item label="官网地址">
          <a :href="item.web_url">{{ item.web_url }}</a></a-descriptions-item
        >
        <a-descriptions-item label="公司名称">{{ item.company[1] }}</a-descriptions-item>
        <a-descriptions-item label="产品图片" :span="2">
          <img :src="item.img" alt="" width="380px" height="115px" />
        </a-descriptions-item>
        <a-descriptions-item label="产品简介" :span="3">
          {{ item.comment }}
        </a-descriptions-item>
        <a-descriptions-item label="产品详情">
          <br />
          总体评价：<Rate :default-value="item.score" allow-half disabled />
          <br />
          留言数量：{{ item.comment_num }}
          <br />
          浏览量：{{ item.views_count }}
        </a-descriptions-item>
      </a-descriptions>
    </div>
  </div>
</template>

<script>
import { Rate, Empty } from 'ant-design-vue'
import { getauthorProductAndTree } from '@/services/xhr/demo'
export default {
  components: {
    Rate,
    Empty,
  },
  methods: {
    isEmptyObj(obj) {
      return Object.keys(obj).length === 0
    },
  },
  data() {
    return {
      dataInfo: [],
    }
  },
  async created() {
    this.dataInfo = await getauthorProductAndTree({ id: this.$route.params.userId, num: 200 })
    console.log(this.isEmptyObj(this.dataInfo))
  },
}
</script>

<style scoped>
</style>
