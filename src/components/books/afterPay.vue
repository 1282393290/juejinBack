<template>
  <div>
      <div class='book-emty'>
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/book-empty.d58b3e3.svg"/>
        <p class="txt">暂时没有已购小册</p>
        <router-link class="buy" to="/books">选购</router-link>
      </div>
  </div>
</template>
<style lang = 'less' scoped>
    .book-emty{
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .txt{
      text-align: center;
      color: grey;
      margin-top: 25px;
      margin-bottom: 25px;
      font-size:12px;
      }
      .buy{
        background-color: #007fff;
        color: #fff;
        border-radius: 2px;
        border: none;
        padding: .5rem 1.3rem;
        outline: none;
        transition: background-color .3s,color .3s;
        cursor: pointer;
        padding: 6px 80px;
      }
    }
</style>