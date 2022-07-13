<template>
  <div>
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item v-show="child === 1">
          <a @click="back">{{ selected }}</a></a-breadcrumb-item
        >
      </a-breadcrumb>
    </div>
    <div>
      <div style="background-color: #ececec; padding: 20px">
        <a-row :gutter="24" v-show="child === 0">
          <a-col
            :span="6"
            v-for="(item, index) in treeType"
            :key="index"
            :style="{ marginTop: '15px', height: '174px', width: '182px' }"
          >
            <a-card :title="item.name" :bordered="false" @click="toChildTree(index, item.name)" hoverable>
              <p>浏览量：<a-icon type="eye"></a-icon> {{ item.views_count }}</p>
              <p>打赏：<a-icon type="gift"></a-icon>{{ item.prize_pool }}</p>
            </a-card>
          </a-col>
        </a-row>
        <a-row :gutter="24" v-show="child === 1">
          <a-col
            :span="6"
            v-for="(item, index) in childTree"
            :key="index"
            :style="{ marginTop: '15px', height: '174px', width: '182px' }"
          >
            <a-card :title="item.name" :bordered="false" @click="toPoster(item.type_id)" hoverable>
              <p>浏览量：<a-icon type="eye"></a-icon> {{ item.views_count }}</p>
              <p>打赏：<a-icon type="gift"></a-icon>{{ item.prize_pool }}</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getauthorProductAndTree, getTypeTree } from '@/services/xhr/demo'
export default {
  data() {
    return {
      dataInfo: [],
      treeId: 0,
      treeInfo: [],
      treeType: [],
      child: 0,
      childTree: [],
      selected: '',
    }
  },
  methods: {
    toChildTree(index, name) {
      this.child = 1
      this.childTree = this.treeType[index].children
      this.selected = name
    },
    toPoster(type) {
      this.$router.push({
        // path: '/personal/introduction',
        name: 'personal.poster',
        params: { type: type },
      })
    },
    back() {
      this.child = 0
    },
  },
  async created() {
    this.dataInfo = await getauthorProductAndTree({ id: this.$route.params.userId, num: 200 })
    this.treeId = this.dataInfo.my_tree[0].id
    this.treeInfo = await getTypeTree({ tree_id: this.treeId })
    this.treeType = this.treeInfo[0].treeType
  },
}
</script>

<style scoped>
</style>
