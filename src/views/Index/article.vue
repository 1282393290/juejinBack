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
        extensions: {query: {id: "653b587c5c7c8a00ddf67fc66f989d42"}},
        operationName: "",
        query: "",
        variables: {tags: [], category: "5562b428e4b00c57d9b94b9d", first: 20, after: "", order: "POPULAR"}
      }
    }),
    this.getTagNavList({
      params: {
        extensions: {query: {id: "801e22bdc908798e1c828ba6b71a9fd9"}},
        operationName: "",
        query: "",
        variables: {category: "5562b428e4b00c57d9b94b9d", limit: 15}
      }
    })
  },
  components: {
    IndexMain
  },
  props: ['name']
}
</script>
