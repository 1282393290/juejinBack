<template>
    <ul class='book-lists'>
      <router-link tag='li' to='/' class="book-item"
     v-for="item in list"
     :key="item.id"
      >
          <img class="book-img" :src="item.img" alt="">
          <div class="book-info">
            <p class="bookinfo__name">{{item.title}}</p>
            <p class="book-info__actors">{{item.userData.username}}{{item.userData.level}}</p>
            <p class="book-info_people">{{item.lastSectionCount}}小节 {{item.buyCount}}人已购买</p>
          </div>
          <div class="book-buy" >￥{{item.price}}</div>
      </router-link>
    </ul>
</template>

<script>
export default {
  props:{
     list: {
      type: Array
    }
  }
}
</script>
