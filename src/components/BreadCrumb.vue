<template>
  <div class="bread">
    {{breadcrumb}}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.matched)
  },
  computed: {
    breadcrumb(){
      let res = '';
      //  (route object) 表示当前激活的路由的状态信息
      // $route.matched
      // 一个数组，包含当前路由的所有嵌套路径片段的路由记录
      // 路由记录就是 routes 配置数组中的每一个路由对象 (还有在 children 数组)。
      this.$route.matched.forEach((element,index) => {
        res += element.meta
        if (index < this.$route.matched.length - 1) {
          res += '->'
        }
      });
      return res
    
    }
  },

}
</script>

<style lang="less" scoped>
.bread{
  padding:10px 10px;  
}
</style>