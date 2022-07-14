<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 0px' }">
      <div class="logo">
        <!-- <img src="~@/assets/logo.svg" class="logo" alt="logo" /> -->
      </div>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }" align="right">
        <a-menu-item key="1" align="left" @click="toHost">
          <a-icon type="home"></a-icon>
          主页
        </a-menu-item>
        <a-input-search
          v-model="seValue"
          placeholder="搜索产品"
          style="width: 200px"
          @search="toSearch"
          :style="{ padding: '10px' }"
        />
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </a-layout-content>
    <!-- 页脚 -->
    <a-layout-footer :style="{ textAlign: 'center' }"> product cloud ©2022 Created by 计科1班2组 </a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  async created() {
    this.toProductPage()
  },
  data() {
    return {
      seValue: '',
    }
  },
  methods: {
    toProductPage() {
      this.$router
        .replace({
          name: 'product.page',
        })
        .catch(() => {})
    },
    toHost() {
      this.$router.push({
        name: 'host.hostPage',
      })
    },
    toSearch(searchValue) {
      this.$router.push({
        name: 'product.search',
        params: { content: searchValue },
      })
    },
  },
}
</script>

<style scoped>
.div1 {
  background-color: #f4f8fe;
}
</style>
