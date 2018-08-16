<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <!-- slides -->
  <swiper-slide v-for= 'item of swiperList' :key="item.id">
     <img class="swiper-img" :src="item.imgUrl" />
  </swiper-slide>
    <!-- Optional controls -->
  <div class="swiper-pagination"  slot="pagination"></div>
 </swiper>
</div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/66/55bc874f100c2d02.jpg_750x200_ac7c05d2.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/71/e4bf6ce2a203ba02.jpg_750x200_c99e3a64.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff
.wrapper
 overflow: hidden
 width: 100%
 height: 0
 padding-bottom: 26.66%
 background: #eee
 .swiper-img
  width: 100%
</style>
