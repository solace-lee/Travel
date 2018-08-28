<template lang="html">
  <div>
    <div class="banner" @click="handleGallaryClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-all-info">
        <div class="banner-number">
          <span class="iconfont number-icon">&#xe67f;</span>
          16
        </div>
        <div class="banner-info">
          <div class="banner-title">
            {{this.sightName}}
          </div>
          <div class="banner-video">
            视频
            <span class="iconfont">&#xe621;</span>
          </div>
        </div>
      </div>
    </div>
    <gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleGallaryClose"></gallary>
  </div>
</template>

<script>
import Gallary from '../../../components/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    Gallary
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleGallaryClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    width: 100%
  .banner-all-info
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    bottom: 0
    color: #fff
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))
    .banner-number
      flex: 1
      padding:  0 .2rem
      line-height: .4rem
      margin-left: .2rem
      height: .4rem
      margin-right: auto
      border-radius: .2rem
      background: rgba(0,0,0,.5)
      .number-icon
        font-size: .3rem
    .banner-info
      display: flex
      line-height: .6rem
      font-size: .32rem
      .banner-title
        margin-left: .2rem
        flex: 1
      .banner-video
        padding: 0 .4rem
</style>
