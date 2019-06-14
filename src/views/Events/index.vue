<template>
  <div class="page-events">
      <div class="main">
         <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item>1</van-swipe-item>
              <van-swipe-item>2</van-swipe-item>
              <van-swipe-item>3</van-swipe-item>
              <van-swipe-item>4</van-swipe-item>
          </van-swipe>
        <!-- <div class="swiper"> -->
          <!-- <van-swipe
            :autoplay="3000" indicator-color="white">

              <van-swipe-item
                v-for="maring in maringList"
                :key="maring._id"
              >
              <img :src="maring.screenshot" alt="">
              </van-swipe-item>


            <van-swipe-item >4</van-swipe-item> -->
          <!-- </van-swipe> -->

        <!-- </div> -->
        <div class="activity">
          <ul>
            <li>
              <!-- <div class="activity-img">
                <img src="https:\/\/user-gold-cdn.xitu.io\/1560135413951bd905f5a9872e4112ea3044148252ef1.jpg" alt="">
              </div> -->
              <div class="activity-bottom">
                <div class="activity-header">
                  NSC  2019  中国网络安全大会
                </div>

                <div class="activity-txt">
                  <p>
                    <i class="iconfont  icon-date"></i>
                    06-14 周五
                  </p>
                </div>
                <div class="activity-btn">
                    <div>
                      <span>
                        <i class="iconfont  icon-location_fill"></i>
                        广州
                      </span>
                    </div>
                    <div class="btn-join">
                      报名参加
                    </div>

                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex';
export default {
  computed:{
    ...mapState('events',[
      'maringList'

    ])

  },

  methods: {
    ...mapActions('events',[
      'getmaringList'
    ])
  },
  created(){
    this.getmaringList();
  }
}
</script>


<style lang="less" scoped>
.main{
  height:100%;
  .swiper{
    height:280px;
    img{
      width:100%;
    }

  }
  .activity{
    text-align: left;

    .activity-img{
      height:220px;
        img{
          width:100%;
        }
    }

    .activity-bottom{
      padding:20px 12px 15px;

      .activity-header{
        height: 40px;
        font-size: 14px;
        font-weight: 700;
      }
      .activity-txt{
        margin-top: 6px;
      }
      .activity-btn{
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
          .btn-join{
            width: 100px;
            height: 25px;
            border-radius: 30px;
            background-color: #4d91fd;
            line-height: 25px;
            color: #fff;
            text-align: center;
          }
      }


    }

  }
}
</style>

