<template>
  <div>
    <a-descriptions :stlye="{ marginTop: '20px' }" :title="productData.product_name" bordered>
      <a-descriptions-item label="产品名称">{{ productData.product_name }}</a-descriptions-item>
      <a-descriptions-item label="解决方案"> {{ productData.solution }}</a-descriptions-item>
      <a-descriptions-item label="官网地址">
        <a :href="productData.web_url" target="_blank">{{ productData.web_url }}</a></a-descriptions-item
      >
      <a-descriptions-item label="公司名称">{{ productData.company_name }}</a-descriptions-item>
      <a-descriptions-item label="产品图片" :span="2">
        <img :src="productData.img" alt="" width="380px" height="115px" />
      </a-descriptions-item>
      <a-descriptions-item label="产品简介" :span="3"> {{ productData.comment }} </a-descriptions-item>
      <a-descriptions-item label="产品详情" :span="3">
        <br />
        总体评价：<Rate :default-value="productData.score" allow-half disabled />
        <br />
        留言数量：{{ productData.comment_num }}
        <br />
        浏览量：{{ productData.views_count }}
        <br />
        打赏：{{ productData.prize_pool }}<a-icon type="gift"></a-icon>
      </a-descriptions-item>
      <a-descriptions-item label="公司创始人">
        <span>{{ company.founder }}</span>
      </a-descriptions-item>
      <a-descriptions-item label="公司地址" :span="2">
        <span>{{ company.address }}</span>
      </a-descriptions-item>
      <a-descriptions-item label="公司简介" :span="3">
        <span>{{ company.comment }}</span>
      </a-descriptions-item>
      <a-descriptions-item label="公司图标" :span="1">
        <span><img :src="company.company_img" alt="" /></span>
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
import { getCompany, getProduct } from '@/services/xhr/demo'
import { Rate, Empty, Carousel } from 'ant-design-vue'
export default {
  async created() {
    this.productData = await getProduct({ id: this.$route.params.id })
    this.company = await getCompany({ id: this.$route.params.id })
  },
  data() {
    return {
      productData: [],
      company: [],
    }
  },
  methods: {},
  components: {
    Rate,
    Empty,
    Carousel,
  },
}
</script>

<style scoped>
</style>
