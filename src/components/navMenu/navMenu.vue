<template>
  <el-col>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <router-link to="./home">
        <el-menu-item index="999"><i class="el-icon-message"></i>首页</el-menu-item>
      </router-link>
      <el-submenu index="0">
        <template slot="title">
          <i class="el-icon-menu"></i>
          基础模块
        </template>
        <router-link to="./bootstrap">
        <el-menu-item index="0-1">组织管理</el-menu-item>
        </router-link>
        <el-menu-item index="0-2">角色管理</el-menu-item>
        <el-menu-item index="0-3">账号管理</el-menu-item>
      </el-submenu>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          产地模块
        </template>
        <el-menu-item index="1-1">农户管理</el-menu-item>
        <el-menu-item index="1-2">地块管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-information"></i>
          企业模块
        </template>
        <el-menu-item index="2-1">基本信息</el-menu-item>
        <el-menu-item index="2-2">认证信息</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          订单模块
        </template>
        <el-menu-item index="3-1">订单状态管理</el-menu-item>
        <el-menu-item index="3-2">订单支付管理</el-menu-item>
        <el-menu-item index="3-3">订单配送管理</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-star-off"></i>
          加工模块
        </template>
        <el-menu-item index="4-1">投入品管理</el-menu-item>
        <el-menu-item index="4-2">台账管理</el-menu-item>
        <el-menu-item index="4-3">采收管理</el-menu-item>
        <el-menu-item index="4-4">加工包装</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          库存模块
        </template>
        <el-menu-item index="5-1">库存管理</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-upload2"></i>
          客户模块
        </template>
        <el-menu-item index="6-1">上下游客户管理</el-menu-item>
        <el-menu-item index="6-2">订单客户管理</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-view"></i>
          物联网监控模块
        </template>
        <el-menu-item index="7-1">气象数据</el-menu-item>
        <el-menu-item index="7-2">墒情数据</el-menu-item>
        <el-menu-item index="7-3">生长图片</el-menu-item>
        <el-menu-item index="7-4">实时视频</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-share"></i>
          大数据监管模块
        </template>
        <el-menu-item index="8-1">串货预警</el-menu-item>
        <el-menu-item index="8-2">防伪预警</el-menu-item>
        <el-menu-item index="8-3">投入品监管</el-menu-item>
        <el-menu-item index="8-4">台账监管</el-menu-item>
        <el-menu-item index="8-5">农药残留</el-menu-item>
        <el-menu-item index="8-6">企业资质监管</el-menu-item>
        <el-menu-item index="8-7">营销增值</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .el-menu-item{
    height 40px !important;
    line-height 40px !important;
    color: #FFF;
    background-color: #42485b;
  }
  .el-menu {
    background-color: #42485b;
    color: #FFF
  }
  .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
    background-color: #4a5064;
  }
  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover {
    background-color: #00c1de;
  }
</style>
