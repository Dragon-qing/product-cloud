<template>
  <a-layout>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <router-view></router-view>
      <a-row type="flex" align="middle" justify="center">
        <a-col :span="8" :order="1">
          <!-- 走马灯 -->
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
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
            <a-col :span="6" v-for="(item, index) in idCard" :key="index" :style="{ marginTop: '15px' }">
              <a-card hoverable size="small" @click="toPersional">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <div>产品：{{ item }}</div>
                    <div>浏览：4148</div>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://s2.loli.net/2022/04/14/uIvO5nlyDX8429Y.png" />
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
import { defineComponent, ref } from 'vue'
import { Carousel, Calendar } from 'ant-design-vue'
const activityEvents = {
  day: [6, 2, 21, 8, 30, 19, 29],
  month: [6, 6, 6, 6, 5, 7, 5],
  titile: [
    '大会-武汉站',
    'CIO成长计划--数字化转型能力进阶',
    '数字化时代 ToB企业的增长思维',
    '	葡萄城低代码和 BI 产品新版发布会',
    '联想智慧办公发布会',
    'EDIA2022企业数智应用大会暨第七届SaaS应用大会',
    'Tapdata LDP 产品发布暨开源说明会',
  ],
}
export default defineComponent({
  methods: {
    toPersional() {
      this.$router.push({
        name: 'personal.index',
        params: { userId: 123 },
      })
    },
    getListData(dateValue) {
      const types = ['warning', 'success', 'error']
      let listData = []
      for (let i = 0; i < activityEvents.titile.length; i++) {
        if (dateValue.date() === activityEvents.day[i] && dateValue.month() === activityEvents.month[i]) {
          listData = [{ type: types[Math.floor(Math.random() * 3)], content: activityEvents.titile[i] }]
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
    // 搜索框
    const seValue = ref('')
    const onChange = (current) => {
      console.log(current)
    }
    const onSearch = (searchValue) => {
      console.log('use value', searchValue)
      console.log('or use this.value', seValue.value)
    }
    return {
      idCard,
      onChange,
      seValue,
      onSearch,
      activityEvents,
    }
  },
  components: {
    Carousel,
    Calendar,
  },
})
</script>

<style scoped>
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
  margin-top: 1ch;
  text-align: center;
  height: 280px;
  line-height: 280px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel .slick-slide h3 {
  color: #fff;
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
</style>
