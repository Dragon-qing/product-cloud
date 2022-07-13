<template>
  <div>
    <a-card :title="userInfo.name" class="div1" style="maxwidth: 1230px">
      <p class="titleFont">邮箱:</p>
      <p class="textFont">{{ userInfo.email }}</p>
      <div>
        <p class="titleFont">二维码：</p>
        <img :src="userInfo.qr_code" alt="" style="width: 128px" />
      </div>
      <div>
        <p class="textFont">浏览量: {{ userInfo.view_nums }}<a-icon type="eye"></a-icon></p>
        <p class="textFont">分享数: {{ userInfo.share_nums }}<a-icon type="share"></a-icon></p>
        <p class="textFont">分类树: {{ userInfo.tree_nums }}<a-icon type="fork"></a-icon></p>
      </div>
    </a-card>
  </div>
</template>

<script>
import { getAuthorSelfIntro } from '@/services/xhr/demo'
export default {
  data() {
    return {
      userInfo: [],
    }
  },
  methods: {
    isEmptyObj(obj) {
      return Object.keys(obj).length === 0
    },
  },
  async mounted() {
    this.userInfo = await getAuthorSelfIntro({ id: this.$route.params.userId })
  },
}
</script>

<style scoped>
.div1 {
  background-color: #f0fafc;
}
.titleFont {
  font-weight: 700;
  margin-bottom: 10px;
  color: #555555;
}
.textFont {
  color: #7f7f7f;
  font-size: 14px;
}
</style>
