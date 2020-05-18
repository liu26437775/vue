<template>
    <div id="CallBackData"></div>
</template>

<script>
export default {
  name: 'CallBackData',
  data () {
    return {

    }
  },
  mounted: function () {
    console.log('mounted 挂载结束状态======》')
    this.$axios.get('/api/hello', null, function (data) {
      alert(data)
    }, function (data) {
      alert(data)
    })
  }
}
</script>

<style scoped>

</style>
