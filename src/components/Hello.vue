<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper_header">
        <div class="logo1">
          艾益物联网科技有限公司
      </div>
      </div>
      <div class="wrapper_body">
        <div class="sidebar">
          <v-navMenu :v-show="menuObj"></v-navMenu>
        </div>
        <div class="wrapper_content">
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import navMenu from './components/navMenu/navMenu.vue'
  export default {
    data() {
      return {
        menuObj:true
      }
    },
    created() {
      this.$nextTick(function () {
        this.$store.dispatch('login').then(() => {
          this.$store.dispatch('getBabyList');
        });
      });
    },
    components: {
      'v-navMenu': navMenu
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper_header
    position: fixed;
    width: 100%;
    height: 50px;
    background: #373d41;
    z-index: 101;
    font-size: 12px;
    min-width 990px
    .logo1
      float: left;
      text-align: center;
      height: 50px;
      width:  200px;
      line-height: 50px;
      position: relative;
      color #FFF;
      margin-right: 1px;
      font-size 14px
  .wrapper_body
    position: absolute;
    width: 100%;
    top: 50px;
    bottom: 0px;
    background-color: #000;
    z-index: 100;
    .sidebar
      width: 180px;
      display: block;
      position: fixed;
      top: 50px;
      bottom: 0px;
      background-color: #333744;
      z-index: 102;
      overflow-x: hidden;
    .wrapper_content
      left: 180px;
      width: auto;
      position: absolute;
      top: 0px;
      bottom: 0px;
      right: 0px;
      overflow: hidden;
      background: #eaedf1;
      .content
        margin: 0 8px;
        position: relative;
</style>
