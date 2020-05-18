<template>
  <div id="css">
    <div v-bind:class="{ red: isRed,orange:isOranage }">字体颜色</div>
    <button v-on:click="updateColor">更新字体颜色</button>
  </div>
</template>

<script>
export default {
  name: 'css',
  data () {
    return {
      isRed: false,
      isOranage: false,
      count: 0
    }
  },
  methods: {
    updateColor: function () {
      this.count = this.count + 1
      if (this.count % 3 === 0) {
        this.isRed = false
        this.isOranage = false
      }
      if (this.count % 3 === 1) {
        this.isRed = true
        this.isOranage = false
      }
      if (this.count % 3 === 2) {
        this.isRed = false
        this.isOranage = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .red{
    color: red;
  }
  .orange{
    color: orange;
  }
</style>
