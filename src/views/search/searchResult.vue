<template>
  <a-layout>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>为您找到相关结果约{{ searchData.total }}个</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu mode="inline" style="height: 100%">
            <a-card size="small" title="产品" style="width: 200px">
              <p>共({{ searchData.total }})个产品</p>
              <a-checkbox @change="checkLabel(item.label_id)" v-for="item in labelInfo" :key="item.label_name">
                {{ item.label_name }}({{ item.prod_count }})
              </a-checkbox>
            </a-card>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <div v-for="(item, index) in searchData.info" :key="index" :style="{ marginTop: '15px' }">
            <a-card>
              公司名：<span v-html="item.company_name"></span>
              <br />
              产品名：<span v-html="item.product_name"></span>
              <p style="fontsize: 14px; color: rgba(0, 0, 0, 0.85); marginbottom: 16px; fontweight: 500"></p>
              <a-card title="简介" hoverable>
                <a-row>
                  <a-col :span="12">
                    <div class="imagediv">
                      <img :src="item.logo" alt="" class="case-img-item" @click="toProduct(item.id)" />
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div v-html="item.highlight"></div>
                  </a-col>
                </a-row>
              </a-card>
            </a-card>
          </div>
          <Pagination :default-current="pageNum" :total="searchData.total" @change="onChangePage" v-model="pageNum" />
        </a-layout-content>
      </a-layout>
    </a-layout-content>
  </a-layout>
</template>
<script>
import { getSearchByKeyword, getLabelNames } from '@/services/xhr/demo'
import { Pagination } from 'ant-design-vue'
export default {
  components: { Pagination },
  async created() {
    this.search()
    this.updataLabels(this.content)
  },
  watch: {
    '$route.params.content': {
      immediate: true,
      handler() {
        this.labelNum = []
        this.search()
        this.updataLabels(this.content)
      },
    },
  },
  methods: {
    onChangePage() {
      this.search()
    },
    checkLabel(data) {
      if (this.labelNum.includes(data)) {
        this.labelNum = this.labelNum.filter((num) => num !== data)
      } else {
        this.labelNum.unshift(data)
      }
      this.search()
    },
    toProduct(data) {
      this.$router.push({
        name: 'product',
        params: { id: data },
      })
    },
    async updataLabels(data) {
      this.labelData = await getLabelNames({ keyword: data })
      this.labelInfo = this.labelData.label_info
    },
    async search() {
      this.content = this.$route.params.content
      this.searchData = await getSearchByKeyword({
        keyword: this.content,
        page: this.pageNum,
        size: this.sizeNum,
        label: this.labelNum.join(','),
      })
    },
  },
  data() {
    return {
      content: '',
      pageNum: 1,
      sizeNum: 10,
      labelNum: [],
      searchData: [],
      labelData: [],
      checked1: false,
      checked2: false,
      checked3: false,
      labelInfo: [],
    }
  },
}
</script>
<style>
#components-layout-demo-top-side .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
em {
  color: red;
}
.case-img-item {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}
img {
  vertical-align: middle;
  border-style: none;
  align-content: center;
}
.imagediv {
  width: 370px;
  height: 160px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
