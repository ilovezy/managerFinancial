<template>
  <div class="hello">
    <h1>用户中心</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '测试tab页面哈哈哈哈哈'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./WithTabPage";
</style>
