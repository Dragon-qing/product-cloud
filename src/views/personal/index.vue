<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">
          <a-avatar size="large" :src="userInfo.head_img">
            <template #icon></template>
          </a-avatar>
          {{ userInfo.name }}
        </a-menu-item>
        <a-menu-item key="2" @click="toHost">
          <a-icon type="home"></a-icon>
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
            <a-menu-item key="2" @click="toAchievement">成果展示</a-menu-item>
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
            <a-menu-item key="5" @click="toPhoto">照片</a-menu-item>
            <a-menu-item key="6" @click="toVideo">视频</a-menu-item>
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
import { getAuthorSelfIntro } from '@/services/xhr/demo'
export default defineComponent({
  data() {
    return {
      userInfo: [],
    }
  },
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  async created() {
    this.userInfo = await getAuthorSelfIntro({ id: this.$route.params.userId })
    this.$router
      .replace({
        name: 'personal.introduciton',
      })
      .catch(() => {})
  },
  methods: {
    toHost() {
      this.$router.push({
        name: 'host.hostPage',
      })
    },
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
    toAchievement() {
      this.$router.push({
        name: 'personal.achievement',
      })
    },
    toPhoto() {
      this.$router.push({
        name: 'personal.photo',
      })
    },
    toVideo() {
      this.$router.push({
        name: 'personal.video',
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
