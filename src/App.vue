<template>  
  <div id="app">  
    <el-container>  
      <el-header>  
        <el-menu  
          :default-active="activeIndex"  
          class="el-menu-demo"  
          mode="horizontal"  
          background-color="#545c64"  
          text-color="#fff"  
          active-text-color="#ffd04b" 
        >  
          <el-menu-item index="1">首页</el-menu-item>  
          <el-submenu index="2">  
            <template #title>  
              公司金融  
            </template>  
            <!-- 在这里可以添加公司金融的子菜单项 -->  
          </el-submenu>  
          <el-submenu index="3">  
            <template #title>  
              个人金融  
            </template>  
            <!-- 在这里可以添加个人金融的子菜单项 -->  
          </el-submenu>  
          <el-menu-item index="4">银行卡</el-menu-item>  
          <el-menu-item index="5">金融市场</el-menu-item>  
          <el-menu-item index="6">电子银行</el-menu-item>  
          <el-menu-item index="7">投资者关系</el-menu-item>  
          <el-menu-item index="8">关于</el-menu-item>  
          <el-menu-item index="9">登录</el-menu-item>  
        </el-menu>  
      </el-header>  
      <el-main>  
        <router-view></router-view> <!-- 路由视图 -->  
      </el-main>  
    </el-container>  
  </div>  
</template>
  
<script>  
export default {  
  name: 'App',  
  methods: {  
    handleMenuSelect(key, keyPath) {  
      console.log(key, keyPath);  
      // 根据选中的菜单项执行相应的操作，例如导航到不同的路由  
      // 你可以使用Vue Router的push方法来改变当前路由  
      // this.$router.push({ path: `/your-path-for-${key}` });  
    },  
  },  
};  
</script>  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
