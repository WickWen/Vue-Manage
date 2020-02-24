<template>
  <el-row type="flex" justify='center' align='middle' class="wrapper"> 

    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
       
       <el-form-item>
          <span class="el-icon-user-solid"></span>
          <el-input v-model="ruleForm.username" placeholder="账号"></el-input>
       </el-form-item>
       
       
       <el-form-item  prop="pass">
           <span class="el-icon-menu"></span>
          <el-input type="password" v-model="ruleForm.password" placeholder="密码" ></el-input>
       </el-form-item>


       <el-form-item>
           <el-button type="primary" @click="loginForm">登录</el-button>
           <el-button @click="resetForm">重置</el-button>
       </el-form-item>

   </el-form>

  </el-row>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                username: '',
                password: ''

            }
        }
    },
    methods: {
        loginForm() {

        },
        resetForm() {

        }
    },

}
</script>

<style lang="less" scoped>
.wrapper{
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: #414b76;

}
</style>