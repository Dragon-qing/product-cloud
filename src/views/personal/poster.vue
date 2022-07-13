<template>
  <div class="div1">
    <a-row>
      <a-col :span="3" v-for="(item, index) in posterData.data" :key="index" :style="{ marginTop: '10px' }">
        <a-card class="div1" :bordered="false" hoverable style="border-radius: 15px" @click="toProduct(item.id)">
          <div class="imagediv" v-if="item.logo_display">
            <img :src="item.logo" alt="" class="case-img-item" />
          </div>
          <div class="imagediv" v-else>
            <span class="case-img-text pattern-text">{{ item.product_name }}</span>
          </div>
          <div class="case-img-text">{{ item.product_name }}</div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getSearchByType } from '@/services/xhr/demo'
export default {
  methods: {
    toProduct(data) {
      this.$router.push({
        name: 'product',
        params: { id: data },
      })
    },
  },
  data() {
    return {
      posterData: [],
    }
  },
  async created() {
    this.posterData = await getSearchByType({ type: this.$route.params.type })
  },
}
</script>

<style scoped>
.div1 {
  background-color: #eff7fc;
}

.imagediv {
  width: 116.94px;
  height: 44.33px;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.case-img-text {
  word-break: break-all;
  display: inline-block;
  width: 116.94px;
  text-align: center;
  color: rgba(49, 138, 255, 0.46);
}
.pattern-text {
  color: #318aff !important;
  font-weight: 700;
  font-size: 12px;
}
.case-img-item {
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
}
img {
  vertical-align: middle;
  border-style: none;
  align: center;
}
</style>
