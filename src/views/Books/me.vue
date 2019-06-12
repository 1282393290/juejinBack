<template>

    <div  class="me-panel">
      <div class='login-info'>
          <div class="info">
            <img src="https://mirror-gold-cdn.xitu.io/16b41946417aa69bc67?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1"
            alt=" " class="hreo">
            <p class="message">甜美的回忆</p>
            <p  class="iconfont icon-jiantou icon"></p>
          </div>
          <div class="list">
            <p class="text">消息中心</p>
            <p class="item"><span>已购</span> <span>0本</span></p>
            <p class="text">设置</p>
          </div>
          <div class='login'>退出登录</div>
      </div>
      <Tabbar></Tabbar>
   </div>

</template>
<script>
import Tabbar from '@/components/books/Tabbar.vue'
export default {
  components: {
   Tabbar
  }
}
</script>
<style lang='less' scoped>
.me-panel{
  width: 100%;
  height:100%;
  .login-info{
    width: 100%;
    height:745px;
    background-color: #f4f5f5;
    .info{
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin-top: 15px;
    background-color: #fff;
    padding: 10px 20px;
    margin-top:15px;
    .hreo{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    }
    .message{
    font-size: 16px;
    font-weight: 400;
    height: 55px;
    line-height: 55px;
    margin-left: 20px;
    width:252px;
    text-align: left;
    }
    .icon{
    font-size: 16px;
    font-weight: 400;
    }
  }
  .list{
    width: 100%;
    height: 135px;
    margin:15px 0;
     background-color: #fff;
    .text{
      height: 45px;
      margin:0 15px;
      text-align: left;
      line-height: 45px;
    }
    .item{
      display: flex;
      justify-content: space-between;
      margin:0 15px;
      height: 45px;
      line-height: 45px;
    }
  }
  .login{
    background-color: #fff;
    line-height: 45px;
    height: 45px;
    text-align: center;
    font-size: 16px;
  }
  }
}
</style>