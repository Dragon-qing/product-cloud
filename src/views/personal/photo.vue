<template>
  <div>
    <div v-if="isEmptyObj(photos)">
      <Empty />
    </div>
    <div v-else>
      <a-row>
        <a-col :span="8" v-for="(item, index) in photos" :key="index">
          <img :src="item.img" alt="item.file_name" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { getAuthorPhotos } from '@/services/xhr/demo'
import { Empty } from 'ant-design-vue'
export default defineComponent({
  async created() {
    this.photos = await getAuthorPhotos({ id: this.$route.params.userId })
  },
  data() {
    return {
      photos: {},
    }
  },
  methods: {
    isEmptyObj(obj) {
      return Object.keys(obj).length === 0
    },
  },
  components: {
    Empty,
  },
})
</script>
<style scoped>
/* For demo */
</style>
