<template>
  <div id="IfFor">
    <p v-if="seen">现在你看到我了</p>
    <li v-for="todo in todos" v-bind:key="todo.text">
      {{ todo.text }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'IfFor',
  data () {
    return {
      seen: true,
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
