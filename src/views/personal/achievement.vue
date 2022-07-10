<template>
  <!-- <a-empty /> -->
  <Atimeline>
    <AtimelineItem>2017年12月，荣获“影响中国”2017年度教育人物</AtimelineItem>
    <AtimelineItem>2018年9月，马云发出公开信宣布将于2019年9月10日卸任集团董事局主席，由CEO张勇接任；</AtimelineItem>
    <AtimelineItem>2019年3月，马云以373亿美元财富排名2019年福布斯全球亿万富豪榜第21位；</AtimelineItem>
    <AtimelineItem>2021年4月，马云以484亿美元财富位列《2021福布斯全球富豪榜》第26名。</AtimelineItem>
  </Atimeline>
</template>

<script>
import { Timeline } from 'ant-design-vue'
const timelineItem = Timeline.Item
export default {
  components: {
    Atimeline: Timeline,
    AtimelineItem: timelineItem,
  },
}
</script>

<style></style>
