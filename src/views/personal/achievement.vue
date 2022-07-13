<template>
  <!-- <a-empty /> -->
  <div>
    <div v-if="isEmptyObj(workInfo)">
      <Empty />
    </div>
    <div v-else>
      <Atimeline>
        <AtimelineItem v-for="(item, index) in workInfo" :key="index">
          {{ item.work_name }}
          链接：<a :href="item.work_url" target="_blank">{{ item.work_url }}</a>
        </AtimelineItem>
      </Atimeline>
    </div>
  </div>
</template>

<script>
import { Timeline, Empty } from 'ant-design-vue'
import { getAuthorWorksShow } from '@/services/xhr/demo'
const timelineItem = Timeline.Item
export default {
  data() {
    return {
      workInfo: [1],
    }
  },
  methods: {
    isEmptyObj(obj) {
      return Object.keys(obj).length === 0
    },
  },
  async mounted() {
    this.workInfo = await getAuthorWorksShow({ id: this.$route.params.userId })
  },
  components: {
    Atimeline: Timeline,
    AtimelineItem: timelineItem,
    Empty,
  },
}
</script>

<style></style>
