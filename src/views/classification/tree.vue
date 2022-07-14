<template>
  <a-layout>
    <a-layout-sider width="200" style="background: #fff">
      <a-menu v-model="selectedKeys2" mode="inline" :style="{ height: '100%', borderRight: 0 }">
        <template>
          <a-card hoverable style="width: 200px">
            <a-card-meta title="系统分类树" description="">
              <template #avatar>
                <a-avatar src="https://joeschmoe.io/api/v1/random" />
              </template>
            </a-card-meta>
            <div class="cardDiv">
              <div>
                产品
                <a-icon type="project" />
                <p>{{ treeInfo.product_counts }}</p>
              </div>
              <div>
                浏览<a-icon type="fire" />
                <p>{{ treeInfo.view_counts }}</p>
              </div>
            </div>
          </a-card>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>分类</a-breadcrumb-item>
        <a-breadcrumb-item v-show="child === 1">
          <a @click="back">{{ selected }}</a>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content :style="{ background: '#fff', margin: '10px' }">
        <div style="background-color: #ececec">
          <a-row :gutter="2" v-show="child === 0">
            <a-col
              span="6"
              v-for="(item, index) in systemTree.treeType"
              :key="index"
              :style="{ maxHeight: '174px', maxWidth: '182px' }"
            >
              <div class="container">
                <a-card
                  hoverable
                  :title="item.name + '(' + item.value + ')'"
                  :bordered="false"
                  :style="{ margin: '10px 8px', maxWidth: '170px' }"
                  @click="toChildTree(index, item.name)"
                >
                  <div class="cardDiv">
                    <div>
                      <a-icon type="eye" />
                      <p>{{ item.views_count }}</p>
                    </div>
                    <div>
                      <a-icon type="money-collect" />
                      <p>{{ item.prize_pool }}</p>
                    </div>
                  </div>
                </a-card>
              </div>
            </a-col>
          </a-row>
          <a-row :gutter="2" v-show="child === 1">
            <a-col
              span="6"
              v-for="(item, index) in childTree"
              :key="index"
              :style="{ maxHeight: '174px', maxWidth: '182px' }"
            >
              <div class="container">
                <a-card
                  hoverable
                  :title="item.name + '(' + item.value + ')'"
                  :bordered="false"
                  :style="{ margin: '10px 8px', maxWidth: '170px' }"
                  @click="toPoster(item.type_id)"
                >
                  <div class="cardDiv">
                    <div>
                      <a-icon type="eye" />
                      <p>{{ item.views_count }}</p>
                    </div>
                    <div>
                      <a-icon type="money-collect" />
                      <p>{{ item.prize_pool }}</p>
                    </div>
                  </div>
                </a-card>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { getTypeTree } from '@/services/xhr/demo'
export default defineComponent({
  components: {},
  data() {
    return {
      child: 0,
      systemTree: {},
      treeInfo: {},
      childTree: [],
      selected: '',
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
    }
  },
  async created() {
    ;[this.systemTree] = await getTypeTree({ tree_id: '' })
    this.treeInfo = this.systemTree.treeInfo[0]
  },
  methods: {
    toPoster(type) {
      this.$router.push({
        // path: '/personal/introduction',
        name: 'host.poster',
        params: { type: type },
      })
    },
    back() {
      this.child = 0
    },
    toChildTree(index, name) {
      this.child = 1
      this.childTree = this.systemTree.treeType[index].children
      this.selected = name
    },
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
.container {
  /* display: flex; */
  align-items: center;
  max-width: 170px;
}
.cardDiv {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
</style>
