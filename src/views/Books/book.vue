<template>
<div>

    <ul class="nav-list-left">
      <router-link tag="li" to="/">全部</router-link>
      <router-link tag="li" to="/">前端</router-link>
      <router-link tag="li" to="/">后端</router-link>
      <router-link tag="li" to="/">移动</router-link>
      <router-link tag="li" to="/">开发</router-link>
      <router-link tag="li" to="/">通用</router-link>
    </ul> 
    <BookText></BookText>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import BookText from '@/components/books/BookText.vue'
import Tabbar from '@/components/books/Tabbar.vue'
export default {
 components: {
   BookText,
   Tabbar
  }
}
</script>
<style lang="less">

      .nav-list-left{
        display: flex;
        width: 100%;
        height: 3.833rem;
        align-items: center;
        li{
          position: relative;
          padding: 0 0.95rem;
          line-height: 1;
          text-align: center;
        }
      }
    .book-lists{
      width:100%;
      .book-item{
        display: flex;
        padding: 15px;
       img{
          width: 52px;
          height: 72px;
         }
        .book-info{
          width: 180px;
          margin-left: 16px;
          text-align:left; 
          flex-grow: 1;
          .bookinfo__name{
          font-size: 16px;
          font-weight: 700;
          line-height: 20px
          }
          .book-info__actors{
          font-size: 14px;
          color: #2e3135;
          margin-top: 10px;
          }
          .book-info_people{
            margin-top: 10px;
            font-size: 14px;
            color: #2e3135;
          }
        }
        .book-buy{
          height: 30px;
          line-height: 30px;
          padding-left: 15px;
          padding-right: 15px;
          border-radius: 15px;
          background-color: #f0f7ff;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          color: #07f;
          align-self: center;
          margin-left: 10px;
          flex-shrink: 0;
        }
       }
     }
</style>
