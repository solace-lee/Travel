<template lang="html">
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for='item of List' :key='item.id'>
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      List: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
        title: '广州必游TOP10',
        desc: '感受现代和传统相融合的广州'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1506/fd/08f524fa9455b4.jpg_r_640x214_b37dbb39.jpg',
        title: '暑期玩转粤港澳',
        desc: '这个假期开启最高大上的国内游'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/88/56f7f4bd0493fe.jpg_r_640x214_f8c0994a.jpg',
        title: '签到广州长隆',
        desc: '来广州长隆，就对了，就够了~'
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
  border-bottom: .1rem solid #eee
  .item-img
    height: 100%
    width: 100%
  .item-info
    padding: .2rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      font-size: .26rem
      color: #ccc
      ellipsis()
</style>
