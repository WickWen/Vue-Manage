<template>
<div>
  <el-pagination
    background
    layout="total, sizes,prev, pager, next,jumper"
    :total="total"
    :page-size='pageSize'
    :page-sizes="[10, 20, 30, 50]"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
  <br>

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

      <template v-slot:header>
        <!-- 在 <template> 上使用特殊的 slot-scope attribute，可以接收传递给插槽的 prop
        自 2.6.0 起有所更新。已废弃的使用 slot-scope 和 slot 新语法指令为v-slot
        也有缩写   v-slot:header 可以被重写为 #header
        注意 作用域插槽 如果没有在{{}} 放置数据 会报 警告
        'scope' is defined but never used. -->
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
  

</div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        search: '',
        pageIndex: 1,
        pageSize: 10,
        total:0,
      }
    },
    mounted() {
      this.loadlist();
    },
    methods:{
      handleCurrentChange(newPageIndex){  /* 接收一个参数,就是当前页面的页码 */
        this.pageIndex = newPageIndex
        this.loadlist();
      },
      handleSizeChange(newPageSize){
        this.pageSize = newPageSize
        this.loadlist();
      },
      // 监听 size-change 事件，接收最新每页条数，触发函数修改当前 pageSize 然后发送请求

      // 获取列表数据方法封装
      loadlist(){
        this.$axios({
        url: '/post',
        params:{
          pageIndex:this.pageIndex,
          pageSize:this.pageSize
        }
      }).then(res=>{
        const {data,total} = res.data;
        console.log(data)
        this.tableData = data;
        this.total = total;  /* 文章列表借口显示total总数 */
      })
      },

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