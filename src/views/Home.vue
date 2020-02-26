<template>
  <el-container class="wrapper">
    <el-header>Hacker News</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {

}
</script>

<style lang="less" scoped>
.wrapper{
    // 容器占满窗口高度
    position: absolute;
    width: 100%;
    height: 100%;

}
  .el-header {
    background-color: #1e1e2f;
    color: #ffffff;
    text-align: left;
    padding-left: 24px;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #e04ecb;
    color: #ffffff;
    text-align: center;
    line-height: 200px;
    border-radius: 8px;
    margin-top: 10px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>