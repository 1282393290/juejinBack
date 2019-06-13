<template>
  <div>
      <component :is="loginState?'AfterPay':'BeforePay'"></component>
      <Tabbar></Tabbar>
      <Login></Login>
      <Reg></Reg>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Login from '@/components/common/login.vue'
import Reg from '@/components/common/reg.vue'
import Tabbar from '@/components/books/Tabbar.vue'
import AfterPay from '@/components/books/afterPay.vue'
import BeforePay from '@/components/books/beforePay.vue'

export default {
  computed:{
    ...mapState(['loginState'])
  },
  components: {
   Tabbar,
   AfterPay,
   BeforePay,
    Login,
    Reg
  }
}
</script>
