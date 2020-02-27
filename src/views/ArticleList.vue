<template>
  <el-table
    :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%" class="list">

    <el-table-column
      label="ID"
      prop="id"
      width='81'
      align='center'>
    </el-table-column>

    <el-table-column
      label="Article"
      prop="title"
      width='624'
      header-align='center'>
    </el-table-column>

    <el-table-column
      label="Thumbnail"
      width='400'
      align='center'>
      <template slot-scope="scope">
        <img :src="scope.row.cover[0].url" alt="" class="thumbnail">
      </template>
    </el-table-column>

    <el-table-column
      label="Writer"
      prop="user.nickname"
      width='220'>
    </el-table-column>

    <el-table-column
      align="right">

      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="medium"
          placeholder="输入文章关键字搜索"/>
      </template>

      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
  export default {
    mounted() {
      this.$axios({
        url: '/post'
      }).then(res=>{
        const {data} = res.data;
        console.log(data)
        this.tableData = data;
      })
    },
    data() {
      return {
        tableData: [],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="less" scoped>
.list{
  border-radius: 8px;
  .thumbnail{
    width: 200px;
    height: 120px;
    object-fit: cover
  }
}
</style>