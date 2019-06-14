<template>
  <div class="page-home">
    <headCommon />
    <Navigation :navList="resetCategoryList"/>
    <router-view class="main" />
  </div>
</template>

<script>
import axios from 'axios'
import headCommon from '@/components/index/headCommon'
import Navigation from '@/components/common/navigation'

import { mapActions,mapGetters } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters('index',['resetCategoryList'])
  },
  methods: {
    ...mapActions('index',['getAdsInfo','getArticleList','getTagNavList','getCategoryList'])
  },
  components: {
    headCommon,
    Navigation
  },
  created () {
    this.getAdsInfo(),
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
        extensions: {query: {id: "801e22bdc908798e1c828ba6b71a9fd9"}},
        operationName: "",
        query: "",
        variables: {category: "5562b419e4b00c57d9b94ae2", limit: 15}
      }
    }),
    this.getCategoryList()
  }
}
</script>

<style lang='less'>
@import '~@/styles/base.less';
@import '~@/styles/index/index.less';

.page-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .headCommon {
    flex: 0 0 auto;
  }
  .navigation {
    flex: 0 0 auto;
  }
  .main {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
