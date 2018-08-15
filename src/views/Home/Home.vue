<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <di>test</di>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped lang="stylus">

</style>
