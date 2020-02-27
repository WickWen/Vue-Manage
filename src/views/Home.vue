<template>
  <el-container class="wrapper">
    <el-header>
      <div class="logo">
        <i class="el-icon-loading"></i>
        News
      </div>
      <img :src="$axios.defaults.baseURL + user.head_img" alt />
      <div class="userinfo">{{user.nickname}}</div>
    </el-header>

    <el-container>
      <el-aside width="240px">
        <el-menu
          default-active="1"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#1890ff"
        >
          <el-menu-item index="1" @click="$router.push('/articlelist')">
            <i class="el-icon-menu"></i>
            <span slot="title">文章列表</span>
          </el-menu-item>

          <el-menu-item index="2" @click="$router.push('/editpage')">
            <i class="el-icon-document-copy"></i>
            <span slot="title">发布文章</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <BreadCrumb></BreadCrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import BreadCrumb from '../components/BreadCrumb.vue'
// @ is an alias to /src
export default {
  components:{
    BreadCrumb
  },
  data() {
    return {
      // 字符串转对象
      user: JSON.parse(localStorage.getItem("user"))
    };
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  // 容器占满窗口高度
  position: absolute;
  width: 100%;
  height: 100%;

}
.el-header {
  background-color: #27293d;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .logo {
    flex: 1;
    font-weight: 600;
    font-size: 20px;
    text-align: left;
    padding-left: 24px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  }
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  .userinfo {
    margin-right: 24px;
  }
}

.el-aside {
  background-color: #001529;
  color: #ffffff;
  text-align: center;
  line-height: 200px;
  border-radius: 8px;
  margin-top: 10px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  border-radius: 8px;
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