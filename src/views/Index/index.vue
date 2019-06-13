<template>
  <div class="page-home">
    <headCommon />
    <Navigation :navList="navList"/>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import headCommon from '@/components/index/headCommon'
import Navigation from '@/components/common/navigation'
import IndexMain from '@/components/index/indexMain'

import { mapActions } from 'vuex'
export default {
  data () {
    return {
      navList: [
        {title:"推荐",url:'/'},
        {title:"后端",url:'/backend/backend'},
        {title:"前端",url:'/frontend/frontend'},
        {title:"Android",url:'/android/android'},
        {title:"iOS",url:'/ios/ios'},
        {title:"人工智能",url:'/ai/ai'},
        {title:"开发工具",url:'/freebie/freebie'},
        {title:"代码人生",url:'/career/career'},
        {title:"阅读",url:'/article/article'}
      ]
    }
  },
  methods: {
    ...mapActions('index',['getAdsInfo','getArticleList','getTagNavList'])
  },
  components: {
    headCommon,
    Navigation
  },
  created () {
    this.getAdsInfo(),
    this.getArticleList(),
    this.getTagNavList()
  }
}
</script>

<style lang='less' scoped>
@import '~@/styles/base.less';
@import '~@/styles/index/index.less';
</style>
