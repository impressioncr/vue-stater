<template>
  <div class="aspect">
    <div class="content">
      16:9
    </div>
    <subPage />
  </div>
</template>

<script>
const img = require('../../assets/images/im.png')
console.log(img)
export default {
  components: {
    subPage: () => import('./subpage.vue')
  },
  data () {
    return {

    }
  },
  created () {
    const arr = [1, 3, 2]
    console.log(arr.includes(2))
    arr.find(item => item === 2)
  }
}
</script>

<style lang="stylus">
html, body
  padding 0
  margin 0
  overflow hidden
$w = 16
$h = 9
.aspect
  width 100%
  // background blue
  max-width ($w / $h) * 100vh
  position relative
  &:after
    content ''
    display block
    padding-bottom ($h / $w) * 100vw
</style>
