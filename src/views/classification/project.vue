<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu v-model="selectedKeys" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">产品云图</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>分类</a-breadcrumb-item>
        <a-breadcrumb-item>内部分类</a-breadcrumb-item>
        <a-breadcrumb-item>项目</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <div style="background-color: #ececec; padding: 20px">
          <a-row :gutter="24">
            <a-col :span="4">
              <a-card style="width: 150px">
                <p>红帽（REDHAT）</p>
              </a-card>
            </a-col>
            <a-col :span="4">
              <a-card style="width: 150px">
                <p>SUSE（rancher）</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> Ant Design ©2018 Created by Ant UED </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['2']),
    }
  },
})
</script>
<style>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
