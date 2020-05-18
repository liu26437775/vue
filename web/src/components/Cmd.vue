<template>
    <div id="cmdIssue">
      命令下发
      <cmd-log device-name="设备1" cmd-list="dis cur" @myEvent="myEvent"></cmd-log>
      <cmd-log device-name="设备2"  cmd-list="dis users" @myEvent="myEvent"></cmd-log>
      <cmd-log device-name="设备3"  cmd-list="dis clock" @myEvent="myEvent"></cmd-log>
    </div>
</template>

<script>
import cmdLog from '@/components/CmdLog'
export default {
  name: 'cmdIssue',
  data () {
    return {

    }
  },
  components: {
    'cmd-log': cmdLog
  },
  methods: {
    myEvent: function (e) {
      alert(e)
    }
  }
}
</script>

<style scoped>

</style>
