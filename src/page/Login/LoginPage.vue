<template>
  <div class="login-page">
    <h1>登陆页面啦</h1>
    <h2>Essential Links</h2>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <span class="text-red">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias dolorem est inventore molestiae nemo nesciunt officiis totam veritatis vitae.</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your 和掌柜金融'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./LoginPage";
</style>
