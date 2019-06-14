<template>
  <div class="bought-index">
      <div class="book-unlogined">
        <router-link tag='span' class="login" to='/'>登录/注册</router-link>
        <span>查看已购小册</span>
      </div>
  </div>
</template>
<style lang='less' scoped>
  .bought-index{
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    margin-bottom:50px;
     background-color: #f4f5f5;
    .book-unlogined{
    text-align: center;
    font-size: 16px;
    padding-top: 50px;
    .login{
    color: #007fff;
    text-align: center;
    font-size: 16px;
    }
    }
  }
</style>
