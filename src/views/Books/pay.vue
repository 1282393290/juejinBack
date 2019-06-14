<template>
<div class='book-emty'>
  <img src="https://b-gold-cdn.xitu.io/v3/static/img/book-empty.d58b3e3.svg"/>
  <p class="txt">暂时没有已购小册</p>
  <button class="buy">购买</button>
</div>
</template>
<script>
export default {
 
}
</script>
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
        
      }
    }
</style>