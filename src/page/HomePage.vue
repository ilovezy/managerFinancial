<template>
  <el-container class="home-page">
    <el-header>
      <top-nav></top-nav>
    </el-header>

    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>

      <el-main>
        <router-view/>
      </el-main>


      <!--<el-footer>-->
      <!--成都融证通 - 和掌柜金融-->
      <!--</el-footer>-->

    </el-container>
  </el-container>
</template>

<script>
  import TopNav from './HomePageComp/TopNav'
  import LeftMenu from './HomePageComp/LeftMenu'

  export default {
    name: 'HelloWorld',

    components: {TopNav, LeftMenu},

    data() {
      return {
        activeIndex: '1',
        msg: 'Welcome to Your 和掌柜金融'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "./HomePage";
</style>
