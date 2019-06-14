<template>
  <div class="tags-nav">
    <ul class="tag-list">
      <li v-for="tag in tagShowList" :key="tag.tagId">
        <router-link to="/" class="tag">{{tag.title}}</router-link>
      </li>
      <li v-show="tagHideList.length && unfold" class="unfold">
        <button class="tag" @click="unfold=!unfold"><span>展开</span><i class="iconfont icon-triangle-down"></i></button>
      </li>
      <li v-for="tag in tagHideList" :key="tag.tagId" v-show="!unfold">
        <button class="tag">{{tag.title}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      unfold: true
    }
  },
  props: ['tagList'],
  computed: {
    tagHideList () {
      return this.tagList.filter((val,key)=>key>8)
    },
    tagShowList () {
      return this.tagList.filter((val,key)=>key<9)
    }
  }
}
</script>

<style lang="less" scoped>
.tags-nav {
  width: 100%;
  .tag-list {
    padding-left: 2rem;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    .iconfont {
      font-size: 1.1rem;
      transform: scale(1.5);
    }
    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      border-radius: 1rem;
      font-size: 1.1rem;
      padding: 0 .83rem;
      margin-right: .83rem;
      margin-bottom: .75rem;
      background: #fff;
      color: #909090;
      .active {
        background-color: #007fff;
        color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.05);
      }
    }
  }
}
</style>

