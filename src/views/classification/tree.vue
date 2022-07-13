<template>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu v-model="selectedKeys2" mode="inline" :style="{ height: '100%', borderRight: 0 }">
        <template>
          <a-card hoverable style="width: 200px">
            <a-card-meta title="系统分类树" description="">
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-card-meta>
          </a-card>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>分类</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', margin: '10px' }">
        <div style="background-color: #ececec">
          <a-row :gutter="24">
            <a-col :span="6" v-for="(item, index) in titleList" :key="index" :style="{ marginTop: '10px' }">
              <a-card :title="item" :bordered="false" :headStyle="hstyle">
                <p>浏览量：164</p>
                <p>打赏：23</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },

  setup() {
    const titleList = ref(['操作系统', '中间件', '数据库', '安全软件', '安全软件'])
    return {
      hstyle: { height: '200px', 'text-align': 'center' },
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
      titleList,
    }
  },
})
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
.content {
  width: 300px;
  height: 200px;
  background: pink; /* 针对不支持渐变的浏览器 */
  background: -webkit-linear-gradient(180deg, #dc1010, #90ed5a, #2f57e8);
  /*  Safari 5.1 到 6.0 */
  background: -o-linear-gradient(180deg, #dc1010, #90ed5a, #2f57e8);
  /*  Opera 11.6 到 12.0 */
  background: -moz-linear-gradient(180deg, #dc1010, #90ed5a, #2f57e8);
  /*  Fx 3.6 到 15 */
  background: linear-gradient(180deg, #dc1010, #90ed5a, #2f57e8);
  /* 标准语法（必须是最后一个） */
}
</style>
