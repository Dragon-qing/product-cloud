<template>
  <a-card :bordered="false">
    <a-table :columns="columns" :data-source="data">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </a-card>
</template>

<script>
import { getCalendar } from '@/services/xhr/demo'
const columns = [
  {
    title: '主题名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '开始时间',
    dataIndex: 'start_date',
    key: 'start_date',
  },
  {
    title: '结束时间',
    dataIndex: 'end_date',
    key: 'end_date',
  },
  {
    title: '链接',
    dataIndex: 'link_url',
    key: 'link_url',
  },
]

export default {
  data() {
    return {
      columns,
      data: [],
    }
  },
  async created() {
    // 嵌套式的结构语法
    const result = await getCalendar({ id: 0 })
    this.data = result
  },
}
</script>
