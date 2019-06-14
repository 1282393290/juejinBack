<template>
<div>

   <nav class="navigation">
    <ul class="nav-list">
        <li v-for="(item,index) in navlist" :key="index">
          <router-link to="/">{{item.name}}</router-link>
        </li>
    </ul>
  </nav>
    <BookText :list='booklist'></BookText>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import BookText from '@/components/books/BookText.vue'
import Tabbar from '@/components/books/Tabbar.vue'
export default {
  data () {
    return {
     
    }
  },     
 components: {
   BookText,
   Tabbar
  },
  computed:{
    ...mapState('books', [
      'navlist','booklist'
    ]),
  },
  methods:{
    ...mapActions('books',['getnavList','getbookList'])
  },
  created(){
   this.getnavList()
   this.getbookList()
  }
}
</script>
<style lang="less" >
      .router-link-active {
       
          top:0;
          left: 0;
         color: inherit;
      }
      .navigation{
        position:fixed;
        top:0;
        z-index: 1;
        background: #fff;
           .nav-list {
              width: auto;
              overflow-x: auto;
              max-width: 960px;
              height: 100%;
              margin: auto;
              display: flex;
              align-items: center;
              line-height: 1;
              height: 3.833rem;
              li {
                padding-left: 2rem;
                height: 100%;
                align-items: center;
                display: flex;
                flex-shrink: 0;
                font-size: 1.16rem;
                color: #71777c;
              }
           }
      }
    .book-lists{
      width:100%;
      margin:50px 0;
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
