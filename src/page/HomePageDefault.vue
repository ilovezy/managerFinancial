<template>
  <div class="home-page-default">
    <h1>
      <span id="fuck">默认首页内容</span>
      <el-button :plain="true" @click="sayFuck">警告</el-button>
    </h1>
    <p>
      hello come Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eveniet labore numquam qui sit ut
      voluptate. At delectus dolore ea fuga modi, nam nulla porro quis tempore voluptate. Ducimus, iure, minus.
      Aspernatur aut autem dolor id ipsum natus perspiciatis quam repellat sunt temporibus. Commodi dicta distinctio
      earum esse et fuga id iusto magnam nihil nobis non nulla odio pariatur quam quidem quo quod quos reprehenderit
      repudiandae saepe sequi similique, velit veniam. Dolorem eligendi fugit odio quidem quisquam repellat, temporibus.
      Atque deserunt error ex illum laboriosam, laborum, laudantium magni maxime necessitatibus pariatur possimus,
      recusandae reprehenderit unde vero voluptatibus? Iusto, qui, tempora!
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    mounted() {
      // this.sayFuck()

      $('#fuck').css('color', 'red')
    },
    data() {
      return {
        msg: '用户中心'
      }
    },
    methods: {
      sayFuck() {
        this.$message({
          message: 'fuck，这是一条成功消息',
          type: 'success'
        });
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./HomePageDefault";

  h1 {
    display: flex;
    align-items: center;

    .el-button {
      margin-left: 10px;
    }
  }
</style>
