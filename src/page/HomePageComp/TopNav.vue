<template>
  <div class="top-nav-bar">
    <div class="top-nav-bar-left">
      <span class="user-avatar">
        <img src="@/assets/avatar.png" alt="">
      </span>
      <span class="user-name">
        fhcccc
      </span>
    </div>


    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             :router="true"
             @select="handleSelect">
      <el-menu-item index="1" route="userCenter">用户中心</el-menu-item>
      <!--<el-submenu index="2">-->
        <!--<template slot="title">我的工作台</template>-->
        <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <el-menu-item index="3" route="messageCenter">消息中心</el-menu-item>
      <!--<el-menu-item index="4">-->
        <!--<a href="https://www.ele.me" target="_blank">订单管理</a>-->
      <!--</el-menu-item>-->

      <el-menu-item @click="doLogout" class="nav-btn-logout" index="">
        <span class="iconfont">&#xe698;</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'TopNav',
    data() {
      return {
        activeIndex: '1',
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },

      doLogout() {
        this.$confirm('确认要退出登录？')
          .then(_ => {
            this.$router.push('/login')
          })
          .catch(_ => {})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./TopNav";
</style>
