<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 0px' }">
      <div class="logo">
        <!-- <img src="~@/assets/logo.svg" class="logo" alt="logo" /> -->
      </div>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }" align="right">
        <a-menu-item key="1" align="left" @click="toHost"> 主页 </a-menu-item>
        <a-input-search
          v-model="seValue"
          placeholder="搜索产品"
          style="width: 200px"
          @search="onSearch"
          :style="{ padding: '10px' }"
        />

        <a-menu-item key="2" @click="toClassification"> 分类 </a-menu-item>
        <a-menu-item key="3" @click="toCalendar">日历事件</a-menu-item>
        <a-menu-item key="4" @click="toUserCenter">个人中心</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <router-view></router-view>
    </a-layout-content>
    <!-- 页脚 -->
    <a-layout-footer :style="{ textAlign: 'center' }"> product ©2022 Created by 计科1班2组 </a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  created() {
    this.$router.replace({
      name: 'host.hostPage',
    })
  },
  methods: {
    toHost() {
      this.$router.push({
        name: 'host.hostPage',
      })
    },
    toPersional() {
      this.$router.push({
        name: 'personal.index',
        params: { userId: 123 },
      })
    },
    toClassification() {
      this.$router.push({
        name: 'host.classification',
      })
    },
    toCalendar() {
      this.$router.push({
        name: 'host.calendar',
      })
    },
    toUserCenter() {
      this.$router.push({
        name: 'host.account',
      })
    },
  },
  setup() {
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
      onChange,
      seValue,
      onSearch,
    }
  },
  components: {},
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
</style>
