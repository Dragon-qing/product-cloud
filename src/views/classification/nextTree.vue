<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu v-model="selectedKeys1" theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">产品云图</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu v-model="selectedKeys2" mode="inline" :style="{ height: '100%', borderRight: 0 }">
          <template>
            <a-card hoverable style="width: 200px">
              <template #cover>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
              </template>
              <template #actions>
                <setting-outlined key="setting" />
                <edit-outlined key="edit" />
                <ellipsis-outlined key="ellipsis" />
              </template>
              <a-card-meta title="刘伊谋" description="ESG分销产品">
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
          <a-breadcrumb-item>内部分类</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '700px' }">
          <div style="background-color: #ececec; padding: 20px">
            <a-row :gutter="24">
              <a-col :span="6">
                <a-card title="国产操作系统" :bordered="false" :headStyle="hstyle">
                  <p>浏览量：164 打赏：23</p>
                </a-card>
              </a-col>
              <a-col :span="6">
                <a-card title="Linux" :bordered="false" :headStyle="hstyle">
                  <p>浏览量：164 打赏：23</p>
                </a-card>
              </a-col>
            </a-row>
          </div>
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

  setup() {
    return {
      hstyle: { height: '200px', 'text-align': 'center' },
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
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
