<template>
  <ul class="tabbar">
    <router-link tag='li' to='/books'>
      <i class="iconfont icon-iconqingbao"></i>
      <span>全部小册</span>
    </router-link>
     <router-link  tag='li' to='/books/pay'>
      <i class="iconfont icon-yigou"></i>
      <span @click='showLogReg(true,true,true)'>已购</span>
    </router-link>
     <router-link  tag='li' to='/books/Me'>
      <i class="iconfont icon-5"></i>
      <span>我</span>
    </router-link>
  </ul>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
   methods:{
    ...mapMutations(['showLogReg']),
    showLogReg (){
      this.showLogReg(arguments)
    }
  },
  computed:{
    ...mapState(['loginState','hasloginCount'])
  }
}
</script>

<style lang='less' scoped>
  .tabbar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
     background-color: #fff;
    li{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    padding-top: 5px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    text-align: center;
    font-size: 12px;
    i{
      font-size: 25px;
    }
    span{
      font-size: 12px;
      margin-top: 2px;
    }
    }
  }
</style>