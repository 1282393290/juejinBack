<template>
  <div class="tags-nav">
    <ul class="tag-list">
      <li class="tag" v-for="(tag,index) in tagList" :key="index">
        <router-link to="/" active-class="active">{{tag.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagList: [
        {title:'全部',iconclass:''},
        {title:'全部',iconclass:''},
        {title:'全部',iconclass:''},
        {title:'全部',iconclass:''},
        {title:'全部',iconclass:''},
        {title:'全部',iconclass:''},
        {title:'全部',iconclass:''},
        {title:'展开',iconclass:'iconfont icon-triangle-down'}
      ]
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
      .active {
        background-color: #007fff;
        color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05), 0 1px 2px 0 rgba(0,0,0,.05);
      }
    }
  }
}
</style>

