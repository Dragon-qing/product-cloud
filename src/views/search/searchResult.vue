<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }" align="right">
        <a-input-search
          v-model="seValue"
          placeholder="搜索产品"
          style="width: 200px"
          @search="onSearch"
          :style="{ padding: '10px' }"
        />

        <a-menu-item key="1">
          <router-link to="/">分类</router-link>
        </a-menu-item>
        <a-menu-item key="2">日历事件</a-menu-item>
        <a-menu-item key="3">个人中心</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>为您找到相关结果约607个</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding: 24px 0; background: #fff">
        <a-layout-sider width="200" style="background: #fff">
          <a-menu v-model="selectedKeys2" mode="inline" style="height: 100%">
            <a-card size="small" title="产品" style="width: 200px">
              <a-checkbox v-model="checked1">其他</a-checkbox>
              <a-checkbox v-model="checked2">商用</a-checkbox>
              <a-checkbox v-model="checked3">开源</a-checkbox>
            </a-card>
          </a-menu>
        </a-layout-sider>
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <a-card size="small" style="width: 1200px">
            <a-descriptions title="明道云 - 上海万企明道软件有限公司">
              <a-descriptions-item label="产品简介">
                明道云是一个创新的APaaS平台，可以帮助用户快速搭建个性化企业应用，用户不需要代码开发就能够搭建出用户体验上佳的销售、运营、人事、采购等核心业务应用，
                打通企业内部数据，也能够通过API和Webhook...明道云的运营企业—上海万企明道软件有限公司于2013年在上海成立，创始人为互联网知名人士任向晖先生。
              </a-descriptions-item>
              <a-descriptions-item label="官网地址"> https://www.mingdao.com/ </a-descriptions-item>
              <a-descriptions-item label="产品分类"> 技术支撑>aPaaS </a-descriptions-item>
            </a-descriptions>
          </a-card>
          <a-card size="small" style="width: 1200px">
            <a-descriptions title="云锋基金 - 云锋基金">
              <a-descriptions-item label="产品简介">
                马云、虞锋...云锋基金关注硬科技、企业服务、绿色能源、现代农业、生物科技、消费等领域，和创业企业一起推动技术创新与可持续发展，助力产业重塑与升级。
                ...云锋基金成立于2010年，致力于成就面向未来的优秀企业，陪伴企业共同创造长期价值，共建美好未来。
              </a-descriptions-item>
              <a-descriptions-item label="官网地址"> http://www.yfc.cn/contactus.html </a-descriptions-item>
              <a-descriptions-item label="产品分类"> 资本>资本 </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
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
    return {
      checked1: ref(false),
      checked2: ref(false),
      checked3: ref(false),
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
    }
  },
})
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
</style>
