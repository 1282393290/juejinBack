<template>
  <div class="page-home">
    <headCommon />
    <Navigation />
  </div>
</template>

<script>
import axios from 'axios'
import headCommon from '@/components/index/headCommon'
import Navigation from '@/components/common/navigation'
export default {
  components: {
    headCommon,
    Navigation
  },
  created () {
    axios.get('http://localhost:8080/v1/getNavList')
      .then(response => {
        console.log(response)
      })
  }
}
</script>

<style lang='less' scoped>
@import '~@/styles/base.less';
@import '~@/styles/index/index.less';
</style>
