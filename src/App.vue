<template>
  <div id="app">
    <div class="wrapper-topbar">
      <alitopbar></alitopbar>
    </div>
    <div id='sidebar-left' class="viewFramework-body viewFramework-sidebar-full">
      <div class="wrapper-navmenu">
        <alinavmenu></alinavmenu>
      </div>
      <div id='sidebal-middle' class="viewFramework-product">
        <div class="viewFramework-product-navbar ng-scope hidden">
          <div class="product-nav-stage ng-scope product-nav-stage-main">
            <div class="product-nav-scene product-nav-main-scene">
              <div class="wrapper-secondmenu">
                <alisecondmenu></alisecondmenu>
              </div>
            </div>
            <div class="product-nav-scene product-nav-sub-scene">
              <div class="product-nav-title">
                <!-- ngIf: config.backNav -->
              </div>
              <div class="product-nav-list">
                <ul>
                  <!-- ngRepeat: item in config.subNav -->
                </ul>
              </div>
            </div>
          </div>
          <!-- /product nav -->
        </div>

        <div class="viewFramework-product-navbar-collapse ng-scope hidden">
          <div class="product-navbar-collapse-inner">
            <div class="product-navbar-collapse-bg"></div>
            <div id='icon-left' class="product-navbar-collapse">
              <span class="glyphicon glyphicon-resize-horizontal"></span>
              <span class="glyphicon glyphicon-resize-horizontal"></span>
            </div>
          </div>
        </div>
        <!-- end ngIf: config.productNavBar != 'disabled' -->
        <!-- /product nav collapse-->
        <div class="viewFramework-product-body" id="mainFrameBody">
          <div class="content">
            <el-breadcrumb separator="/" class="breadcrumb">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>面包屑</el-breadcrumb-item>
            </el-breadcrumb>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import alitopbar from './components/navMenu/alitopbar.vue'
  import alinavmenu from './components/navMenu/alinavmenu.vue'
  import alisecondmenu from './components/navMenu/alisecondmenu.vue'
  import './assets/js/bootstrap.min'
  import './assets/js/index'
  export default {
    mounted() {
      let h = $('.viewFramework-sidebar', parent.document).height();
      $('.home-container').css('height', h - 30);
      $(".sidebar-title").on('click',function (event) {
        $(this).next().toggle();
      });
    },
    components: {
      alitopbar,
      alinavmenu,
      alisecondmenu
    }
  }
</script>

<style lang="stylus" scoped>
  @import './assets/css/aliyunNav/Css/console1412.css'
  .content
    padding 10px;
    .breadcrumb
      padding: 10px;
      background-color: #f5f4f3
</style>
