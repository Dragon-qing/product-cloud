<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <dc-table :dataSource="data" :columns="columns"> </dc-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import DcTable from '@/components/_DC/Table'

export default {
  components: {
    DcTable,
  },
  methods: {
    actionHandler(record) {
      alert(JSON.stringify(record))
    },
  },
  data() {
    return {
      columns: [
        {
          dataIndex: 'textField',
          key: 'textField',
          title: 'Text',
        },
        {
          dataIndex: 'customField',
          key: 'customField',
          title: () => (
            <div>
              <a-icon type="smile-o" /> Custom (Title | Column)
            </div>
          ),
          customRender: (text) => `爱好: ${text}`,
        },
        {
          dataIndex: 'tags',
          key: 'tags',
          title: 'Tags',
          customRender: (tags) =>
            tags.map((tag) => (
              <a-tag key={tag} color={tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'}>
                {tag.toUpperCase()}
              </a-tag>
            )),
        },
        {
          title: 'Action',
          // _ aka text 字段 为空
          customRender: (_, record) => (
            <div>
              <a vOn:click={() => this.actionHandler(record)}>{record.textField}</a>
              <a-divider type="vertical" />
              <a vOn:click={() => this.actionHandler(record)}>{record.customField}</a>
              <a-divider type="vertical" />
              <a class="ant-dropdown-link">
                {' '}
                更多操作 <a-icon type="down" />{' '}
              </a>
            </div>
          ),
        },
      ],
      data: [
        {
          key: '0',
          textField: '唐僧',
          customField: '唠叨',
          tags: ['cool'],
        },
        {
          key: '1',
          textField: '八戒',
          customField: '贪婪',
          tags: ['loser'],
        },
        {
          key: '2',
          textField: '悟空',
          customField: '较真',
          tags: ['key person'],
        },
        {
          key: '3',
          textField: '沙僧',
          customField: '勤勉',
          tags: ['winner'],
        },
      ],
    }
  },
}
</script>

<style></style>
