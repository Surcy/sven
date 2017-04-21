<template>
  <div class="viewFramework-sidebar">
    <div id="sidebar" product-id="account" class="sidebar-content">
      <div class="sidebar-inner ng-scope">
        <div id='sidebar-icon' class="sidebar-fold ng-scope">
          <span class="glyphicon glyphicon-pause"></span>
        </div>
        <div class="sidebar-nav">
          <div class="sidebar-title">
            <div class="sidebar-title-inner ng-scope">
                  <span class="sidebar-title-icon">
                    <!--<span class="icon-arrow-down"></span>-->
                    <span class="glyphicon glyphicon-triangle-bottom"></span>
                  </span>
              <span class="sidebar-title-text ng-binding">平台基础模块</span>
              <span class="sidebar-manage ng-scope">
						<a class="glyphicon glyphicon-cog" title="自定义用户中心快捷入口"></a>
						</span>
            </div>
          </div>
          <ul class="entrance-nav sidebar-trans" id="nav" style="height:auto;">
           <router-link to="/register">
                <li class="nav-item ng-scope">
              <a class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-tasks"></span>
                </div>
                <span class="nav-title ng-binding">注册</span>
              </a>
            </li>
           </router-link>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="3" data-count="4" data-url="Admin/Member/index"
                 class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-user"></span>
                </div>
                <span class="nav-title ng-binding">用户</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="sidebar-nav">
          <div class="sidebar-title">
            <div class="sidebar-title-inner ng-scope">
                  <span class="sidebar-title-icon">
                    <!--<span class="icon-arrow-down"></span>-->
                    <span class="glyphicon glyphicon-triangle-bottom"></span>
                  </span>
              <span class="sidebar-title-text ng-binding">溯源系统</span>
              <span class="sidebar-manage ng-scope">
						<a class="glyphicon glyphicon-cog" title="自定义用户中心快捷入口"></a>
						</span>
            </div>
          </div>
          <ul class="entrance-nav sidebar-trans" style="height:auto;">
            <li class="nav-item ng-scope">
              <a class="ng-scope" data-submenu="1">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-tasks"></span>
                </div>
                <span class="nav-title ng-binding">基本企业信息</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="3"  class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-user"></span>
                </div>
                <span class="nav-title ng-binding">地块管理</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="4" data-count="3" data-url="Admin/Access/index"
                 class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-file"></span>
                </div>
                <span class="nav-title ng-binding">生产台账</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="11" data-count="5" data-url="Admin/Database/index"
                 class="ng-scope">
                <div class="nav-icon">
                  <!--<span class="category-icon icon-yunxunizhuji"></span>-->
                  <span class="glyphicon glyphicon-blackboard"></span>
                </div>
                <span class="nav-title ng-binding">投入品台账</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="13" data-count="3" data-url="Admin/Monitor/index"
                 class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-blackboard"></span>
                </div>
                <span class="nav-title ng-binding">订单管理</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="50" data-count="2" data-url="Admin/Addons/index"
                 class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-resize-horizontal"></span>
                </div>
                <span class="nav-title ng-binding">加工管理</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-tasks"></span>
                </div>
                <span class="nav-title ng-binding">库存管理</span>
              </a>
            </li>
            <li class="nav-item ng-scope">
              <a href="javascript:;" data-submenu="3" data-count="4" data-url="Admin/Member/index"
                 class="ng-scope">
                <div class="nav-icon">
                  <span class="glyphicon glyphicon-user"></span>
                </div>
                <span class="nav-title ng-binding">客户管理</span>
              </a>
            </li>
          </ul>
        </div>
        <div id="time" class="time">
          <font id="today">2016-03-14 17:21:50</font>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                menuIcon: this.$store.state.menu.menuIcon
            }
        },
        created() {
            this.menudata = this.$store.state.menu.menu;
            console.log(this.menudata);
        }
    }

</script>

<style lang="stylus" scoped>


</style>
