<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <a-avatar size="large">
            <template #icon></template>
          </a-avatar>
          用户
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu v-model="selectedKeys2" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <a-sub-menu key="sub1">
            <template #title>
              <span> 个人信息 </span>
            </template>
            <a-menu-item key="1" @click="toIntroduction">个人简介</a-menu-item>
            <a-menu-item key="2">成果展示</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span> 产品与分类树 </span>
            </template>
            <a-menu-item key="3" @click="toMyProduct">我的产品</a-menu-item>
            <a-menu-item key="4" @click="toClassification">我的分类树</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span> 照片与视频 </span>
            </template>
            <a-menu-item key="5">照片</a-menu-item>
            <a-menu-item key="6">视频</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', marginTop: '15px', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
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
  created() {
    this.toIntroduction()
  },
  methods: {
    toIntroduction() {
      this.$router.push({
        name: 'personal.introduciton',
      })
    },
    toMyProduct() {
      this.$router.push({
        name: 'personal.myProduct',
      })
    },
    toClassification() {
      this.$router.push({
        name: 'personal.classification',
      })
    },
  },
  setup() {
    return {
      selectedKeys1: ref([]),
      selectedKeys2: ref(['sub1', '1']),
      // data,
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
</style>
