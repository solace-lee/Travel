<template lang="html">
  <div class="recommend">
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for='item of List' :key='item.id'>
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}条评论</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      List: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '广州长隆旅游度假区',
        desc: '53231'
      }, {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '广州长隆旅游度假区',
        desc: '53231'
      }, {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_200x200_c118d7da.jpg',
        title: '广州长隆旅游度假区',
        desc: '53231'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/mixins.styl'
.title
  margin-top: .1rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem
.item
  overflow: hidden
  display: flex
  height: 2.4rem
  .item-img
    height: 2rem
    width: 2rem
    padding: .2rem
    // width: 100%
  .item-info
    flex: 1
    padding: .2rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      margin-top: .1rem
      line-height: .54rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: .44rem
      margin-top: .2rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>
