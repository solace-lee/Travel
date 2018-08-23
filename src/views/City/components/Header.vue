<template lang="html">
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  text-align: center
  font-size: .32rem
  color: #fff
  .back-icon
    position: absolute
    left: 0
    top: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
