<template>
  <div>
    <el-upload
      :action="$axios.defaults.baseURL + '/upload'" 
      :headers="{Authorization:token}"
      list-type="picture-card"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-preview="handlePreview">
      <!-- 组件封装了ajax请求 axios设置就无效了 -->
      <!-- 注意这里是v-bind : 而不是v-on @ -->
      <i class="el-icon-plus"></i>
    </el-upload>

    <!-- 预览图片功能 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="50%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleSuccess(res,flie,flieList){
      console.log(res.data.url);
    },
    handleRemove(flie,flieList){

    },
    handlePreview(file){
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },

}
</script>

<style>

</style>