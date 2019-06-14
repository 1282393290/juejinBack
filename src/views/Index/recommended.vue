<template>
  <IndexMain :name="name"/>
</template>

<script>
import IndexMain from '@/components/index/indexMain'
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('index',['getArticleList','getTagNavList'])
  },
  created () {
    this.getArticleList({
      params: {
        extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
        operationName: "",
        query: "",
        variables: {first: 20, after: "", order: "POPULAR"}
      }
    }),
    this.getTagNavList({
      params: {
        extensions: {query: {id: "21207e9ddb1de777adeaca7a2fb38030"}},
        operationName: "",
        query: "",
        variables: {first: 20, after: "", order: "POPULAR"}
      }
    })
  },
  components: {
    IndexMain
  },
  props: ['name']
}
</script>

