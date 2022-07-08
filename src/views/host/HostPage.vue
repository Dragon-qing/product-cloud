<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 0px' }">
      <div class="logo" />
      <!-- <img src="~@/assets/logo.png" class="logo" alt="logo" /> -->

      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }" align="right">
        <a-input-search
          v-model="seValue"
          placeholder="搜索产品"
          style="width: 200px"
          @search="onSearch"
          :style="{ padding: '10px' }"
        />

        <a-menu-item key="1">分类</a-menu-item>
        <a-menu-item key="2">日历事件</a-menu-item>
        <a-menu-item key="3">登录</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
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
        <a-col :span="6" :order="2">
          <!-- 日历 -->
          <Calendar v-model="dateValue">
            <template #dateCellRender="{ current: dateValue }">
              <ul class="events">
                <li v-for="item in getListData(dateValue)" :key="item.content">
                  <a-badge :status="item.type" :text="item.content" />
                </li>
              </ul>
            </template>
            <template #monthCellRender="{ current: dateValue }">
              <div v-if="getMonthData(dateValue)" class="notes-month">
                <section>{{ getMonthData(dateValue) }}</section>
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
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="32" :style="{ marginTop: '15px' }">
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
          <a-row :gutter="32" :style="{ marginTop: '15px' }">
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="6">
              <a-card hoverable size="small">
                <template #cover>
                  <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                </template>
                <template class="ant-card-actions" #actions>
                  <div>
                    <p>产品：244</p>
                    <p>浏览：4148</p>
                  </div>
                </template>
                <a-card-meta title="于晓波" description="HR数字化">
                  <template #avatar>
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
    <!-- 页脚 -->
    <a-layout-footer :style="{ textAlign: 'center' }"> product ©2022 Created by 计科1班2组 </a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Calendar } from 'ant-design-vue'
export default defineComponent({
  setup() {
    // 日历
    const dateValue = ref()

    const getListData = (dateValue) => {
      let listData

      return listData || []
    }

    const getMonthData = (dateValue) => {
      if (dateValue.month() === 8) {
        return 1394
      }
    }
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
      dateValue,
      getListData,
      getMonthData,
      onChange,
      seValue,
      onSearch,
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
