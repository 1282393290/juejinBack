<template>
  <div class="page-events">
      <div class="events-main">
         <van-swipe :autoplay="3000" indicator-color="white">
              <van-swipe-item v-for="(ban,index) in bannerList" :key="index">
                <img :src="ban.screenshot" :alt="ban.title">
              </van-swipe-item>
          </van-swipe>
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
      'bannerList'
    ])

  },

  methods: {
    ...mapActions('events',[
      'getBannerList'
    ])
  },
  created(){
    this.getBannerList();
  }
}
</script>


<style lang="less">
.events-main{
  height:100%;
  .van-swipe__track {
    display: flex;
  }
  img{
      min-width: 320px;
      height: 280px;
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

