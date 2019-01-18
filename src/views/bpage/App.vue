<template>
  <div>
    <img src="../../assets/images/im.png">
  </div>
</template>

<script>
const img = require('../../assets/images/im.png')
console.log(img)
export default {
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
div
  color red
</style>
