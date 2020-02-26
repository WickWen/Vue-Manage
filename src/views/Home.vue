<template>
  <el-container class="wrapper">
    <el-header>
      <!-- Hacker News -->
        <img :src="$axios.defaults.baseURL + user.head_img" alt="">
        <div class="userinfo">{{user.nickname}}</div>       
    </el-header>

    <el-container>
      <el-aside width="240px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      // 字符串转对象
      user: JSON.parse(localStorage.getItem('user')),
    }
  },

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
    display: flex ;
    justify-content: flex-end;
    align-items: center;
    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius:50%;
        margin-right: 10px;
      }
    .userinfo{
      margin-right: 8px;
    }

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