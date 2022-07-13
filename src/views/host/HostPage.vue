<template>
  <a-layout>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <router-view></router-view>
      <a-row type="flex" align="middle" justify="center">
        <a-col :span="8" :order="1">
          <!-- 走马灯 -->
          <div>
            <a-row :gutter="10">
              <a-col :span="12">
                <div>
                  <Carousel autoplay arrows :dots="false" :style="{ width: '120px', height: '120px' }">
                    <div v-for="(item, index) in logos" :key="index" class="logodiv">
                      <img :src="item.logo" alt="" class="case-img-item" />
                    </div>
                  </Carousel>
                </div>
              </a-col>
              <a-col :span="10">
                <div>
                  <a-row :gutter="10">
                    <a-col :span="20">
                      <a-statistic title="产品" :value="product_counts" style="margin-right: 50px"> </a-statistic>
                    </a-col>
                    <a-col :span="20">
                      <a-statistic title="浏览" :value="view_counts" class="demo-class">
                        <template #suffix>
                          <span><a-icon type="eye" /></span>
                        </template>
                      </a-statistic>
                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </a-row>
          </div>
          <!-- 第二个走马灯区域 -->
          <Carousel autoplay dots :style="{ marginTop: '10px' }">
            <div v-for="(item, index) in productDailyRecommends" :key="index">
              <div :style="{ maxWidth: '620', maxHeight: '190' }">
                <a-row :gutter="6">
                  <a-col :span="13">
                    <div>
                      <div>
                        <h3>{{ item.product_name }}</h3>
                      </div>

                      <div>
                        <a-row :gutter="10">
                          <a-col :span="8">
                            <a-statistic title="评分" :value="item.total_score"> </a-statistic>
                            <template #suffix>
                              <span><a-icon type="star" /></span>
                            </template>
                          </a-col>
                          <a-col :span="8">
                            <a-statistic title="浏览" :value="item.views_count" class="demo-class">
                              <template #suffix>
                                <span><a-icon type="eye" /></span>
                              </template>
                            </a-statistic>
                          </a-col>
                          <a-col :span="8">
                            <a-statistic title="评论数" :value="item.comment_num" class="demo-class">
                              <template #suffix>
                                <span><a-icon type="comment" /></span>
                              </template>
                            </a-statistic>
                          </a-col>
                        </a-row>
                      </div>
                    </div>
                  </a-col>
                  <a-col :span="10">
                    <div class="logodiv2">
                      <img :src="item.img" alt="" />
                      <a-button type="primary" @click="toProduct(item.id)"> 查看推荐产品 </a-button>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </div>
          </Carousel>
        </a-col>
        <a-col :span="10" :order="2">
          <!-- 日历 -->
          <Calendar>
            <ul slot="dateCellRender" slot-scope="value" class="events">
              <li v-for="item in getListData(value)" :key="item.content">
                <a-badge :status="item.type" :text="item.content" />
              </li>
            </ul>
            <template slot="monthCellRender" slot-scope="value">
              <div v-if="getMonthData(value)" class="notes-month">
                <section>{{ getMonthData(value) }}</section>
                <span>Backlog number</span>
              </div>
            </template>
          </Calendar>
        </a-col>
      </a-row>
      <!-- 资料卡片 -->
      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px', marginTop: '1ch' }">
        <div style="background-color: #ececec; padding: 20px">
          <a-row :gutter="32">
            <a-col :span="6" v-for="(item, index) in usertree" :key="index" :style="{ marginTop: '15px' }">
              <a-card hoverable size="small" @click="toPersional(item.user_id)">
                <!-- <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template> -->
                <template class="ant-card-actions" #actions>
                  <div>
                    <div>产品：{{ item.product_counts }}</div>
                    <div>浏览：{{ item.view_counts }}</div>
                  </div>
                </template>
                <a-card-meta :title="item.user_name" :description="item.type_name">
                  <template #avatar>
                    <a-avatar :src="item.user_image" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
    <!-- 页脚 -->
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue'
import { LeftCircleOutlined } from '@ant-design/icons-vue'
import { Carousel, Calendar } from 'ant-design-vue'
import { getAllTypeTree, getCalendar, getLogo, getProductDailyRecommends } from '@/services/xhr/demo'
// const activityEvents = {
//   day: [6, 2, 21, 8, 30, 19, 29],
//   month: [6, 6, 6, 6, 5, 7, 5],
//   titile: [
//     '大会-武汉站',
//     'CIO成长计划--数字化转型能力进阶',
//     '数字化时代 ToB企业的增长思维',
//     '	葡萄城低代码和 BI 产品新版发布会',
//     '联想智慧办公发布会',
//     'EDIA2022企业数智应用大会暨第七届SaaS应用大会',
//     'Tapdata LDP 产品发布暨开源说明会',
//   ],
// }
export default defineComponent({
  data() {
    return {
      logos: [],
      systree: [],
      usertree: [],
      product_counts: 0,
      view_counts: 0,
      productDailyRecommends: [],
      userId: 123,
      calendar: [],
    }
  },
  async created() {
    // 嵌套式的结构语法
    const [{ systree, usertree }] = await getAllTypeTree()
    this.logos = await getLogo()
    this.systree = systree
    this.usertree = usertree
    this.product_counts = systree[0].product_counts
    this.view_counts = systree[0].view_counts
    this.productDailyRecommends = await getProductDailyRecommends()
    this.calendar = await getCalendar({ id: 0 })
  },
  methods: {
    toProduct(data) {
      this.$router.push({
        // path: '/personal/introduction',
        name: 'product',
        params: { id: data },
      })
    },
    toPersional(userId) {
      this.$router.push({
        // path: '/personal/introduction',
        name: 'personal',
        params: { userId: userId },
      })
    },
    getListData(dateValue) {
      const types = ['warning', 'success', 'error']
      let listData = []
      for (let i = 0; i < this.calendar.length; i++) {
        const date = this.calendar[i].start_date.split('-')
        if (
          dateValue.date() === parseInt(date[2]) &&
          dateValue.month() === parseInt(date[1]) - 1 &&
          dateValue.year() === parseInt(date[0])
        ) {
          listData = [{ type: types[Math.floor(Math.random() * 3)], content: this.calendar[i].name }]
        }
      }

      return listData || []
    },

    getMonthData(value) {
      if (value.month() === 8) {
        return 1200
      }
    },
  },
  setup() {
    const idCard = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return {
      idCard,
    }
  },
  components: {
    Carousel,
    Calendar,
    LeftCircleOutlined,
  },
})
</script>

<style scoped>
/* 图片显示 */
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
.logodiv {
  width: 500px;
  height: 400px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logodiv img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
.logodiv2 {
  width: 500px;
  height: 190px;
  display: table-cell;
  vertical-align: middle;
}
.logodiv2 img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
}
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
/* 走马灯 */
.ant-carousel {
  /* margin-top: 1ch; */
  text-align: center;
  height: 280px;
  line-height: 280px;
  background: #eaf1f7;
  /* overflow: hidden; */
}
.ant-carousel .slick-slide h3 {
  color: rgba(42, 71, 185, 0.914);
}
/* 日历 */
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
.testdiv {
  border: #141414 1px solid;
}
</style>
