<template>
    
    <div  class="me-panel">
      <component :is="loginState?'AfterMe':'BeforeMe'"></component>
      <Tabbar></Tabbar>
   </div>
</template>
<script>
import { mapState } from 'vuex'
import Tabbar from '@/components/books/Tabbar.vue'
import AfterMe from '@/components/books/afterMe.vue'
import BeforeMe from '@/components/books/beforeMe.vue'
export default {
  computed:{
    ...mapState(['loginState'])
  },
  components: {
   Tabbar,
   AfterMe,
   BeforeMe
  }
}
</script>
