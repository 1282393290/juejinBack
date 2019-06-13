<template>
  <main class="main-view">
    <TagsNav v-show="name=='recommended'?false:true"/>
    <router-view />
    <div class="advertisement item" v-for="ad in adsInfo" :key="ad.id">
      <div class="info-box">
        <div class="meta-row">
          <ul class="meta-list">
            <li class="tag">广告</li>
            <li class="username">{{ad.advertiser.title}}</li>
            <li class="date">1天前</li>
          </ul>
        </div>
        <div class="info-row">
          <p class="title">{{ad.title}}</p>
          <p class="description">{{ad.abstract}}</p>
        </div>
      </div>
    </div>
    <div class="item" v-for="ele in articleList" :key="ele.node.id">
      <div class="info-box">
        <div class="meta-row">
          <ul class="meta-list">
            <li class="post">专栏</li>
            <li class="username">{{ele.node.user.username}}</li>
            <li class="date">1天前</li>
            <li class="tags">{{ele.node.tags.map((val,key,arr)=>val.title).join(' / ')}}</li>
          </ul>
        </div>
        <div class="info-row">
          <p class="title">{{ele.node.title}}</p>
          <p class="action">
            <ul class="action-list">
              <li class="likeBtn">
                <i class="iconfont icon-dianzan1"></i>
                <span>{{ele.node.likeCount}}</span>
              </li>
              <li class="commentBtn">
                <i class="iconfont icon-pinglun"></i>
                <span>{{ele.node.commentsCount}}</span>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TagsNav from '@/components/index/tagsNav'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('index',['adsInfo','articleList'])
  },
  components: {
    TagsNav
  },
  props: ['name']
}
</script>

<style lang="less">
@import '~@/styles/common/mixins.less';
.main-view {
  padding-top: 1rem;
  background-color: #f4f5f5;
  .item {
    background: #fff;
    height: auto!important;
    .border-bottom;
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    .info-box {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .meta-list {
        font-size: 12px;
        color: #b2bac2;
        display: flex;
        align-items: baseline;
        white-space: nowrap;
        .post {
          .middle-dot;
          font-weight: 500;
          color: #b71ed7;
        }
        .username,
        .date {
          .middle-dot;
        }
        .tag {
          border-radius: 2px;
          border: 1px solid #b2bac2;
          margin-left: -2px;
          margin-right: 10px;
          padding: 1px 5px;
          -webkit-transform: scale(.8);
        }
      }
    }
    .info-row {
      max-width: 85vw;
      text-align: left;
      .title {
        margin: .5rem 0 1rem;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.2;
        color: #2e3135;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .description {
        font-size: 13px;
        color: #b2bac2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .action-list {
        display: flex;
        .likeBtn,
        .commentBtn {
          align-items: center;
          padding: 0 .8rem;
          height: 100%;
          height: 1.5rem;
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          line-height: 1;
          white-space: nowrap;
          color: #b2bac2;
          border-radius: 1px;
          border: 1px solid #edeeef;
          span {
            color: #b2bac2;
            margin-left: .2em;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>

