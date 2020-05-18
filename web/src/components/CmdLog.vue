<template>
    <div id="CmdLog">
      日志流水
      <div>{{deviceName}}</div>
      <div>{{cmdList}}</div>
      <button v-on:click="callback" >回调</button>
    </div>
</template>

<script>
export default {
  name: 'CmdLog',
  props: [
    'deviceName',
    'cmdList'
  ],
  data () {
    return {

    }
  },
  methods: {
    callback: function () {
      this.$emit('myEvent', this.deviceName + this.cmdList)
    }
  }
}
</script>

<style scoped>

</style>
