<template>
  <div id="method">
     {{count}}
    <br/>
    <input type="button" value="计数+1" v-on:click="countAdd"/>
    <button v-on:click="countAdd">计数+1</button>
  </div>
</template>

<script>
export default {
  name: 'method',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    countAdd: function () {
      console.log(1111)
      this.count = this.count + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
