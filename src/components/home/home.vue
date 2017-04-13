<template>
  <div class="wrapper">
      <div class="wrapper-left">
        <div class="left-row1">
          <div class="left-row1-col1">
            <div class="left-row1-col1-left">
                <div>
                    <!--<div class="title">-->
                      <!--安全预警-->
                    <!--</div>-->
                    <!--<div class="content">-->
                      <!--<p class="title">您尚未开通安全预警</p>-->
                      <!--<div class="link">-->
                        <!--<a href="#" class="link-a">免费开通云账号</a>-->
                      <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="left-row1-col1-right">

            </div>
          </div>
          <div class="left-row1-col2">

          </div>
        </div>
      </div>
      <div class="wrapper-right">
        <div class="wrapper-tab">
          <v-tab></v-tab>
        </div>
      </div>
  </div>
</template>

<script>
  import tab from '../tab/tab1.vue'
  export default {
    components: {
      'v-tab': tab
    }
  }
</script>
<style lang="stylus" scoped>

  .wrapper
    margin: 0px 8px;
    font-size: 28px;
    position: relative;
    .wrapper-left
      padding-right: 336px;
      .left-row1
        margin: 16px 8px;
        border: 1px solid red;
        height: 100px;
        .left-row1-col1
          float: left;
          width: 62%;
          .left-row1-col1-left
            width: 60%;
            display: inline-block;
            vertical-align: top;
            .title
              font-size: 14px;
              margin-bottom: 10px;
            .content
              margin: 0 auto;
              height: 120px;
              background-position: center center;
              background-repeat: no-repeat;
              background-image: -webkit-image-set(url(https://g.alicdn.com/aliyun/home/1.10.67/styles/home/images/yundun-sas-1x.png) 1x, url(https://g.alicdn.com/aliyun/home/1.10.67/styles/home/images/yundun-sas-2x.png) 2x);
              position: relative;
              .title
                font-size: 16px;
                text-align: center;
                color: #999999;
              .link
                position: absolute;
                bottom: 12px;
                width: 100%;
                .link-a
                  display: block;
                  margin: 0 auto;
                  border: 1px solid #00c1de;
                  width: 140px;
                  text-decoration: none;
                  padding: 4px 6px;
                  text-align: center;
                  color: #00C1DE;
          .left-row1-col1-right
            width: 40%;
            display: inline-block;
            overflow: hidden;
            vertical-align: top;
        .left-row1-col2
          float: left;
          width: 38%;
    .wrapper-right
      width: 336px;
      position: absolute;
      top: 0;
      right: 0;
      .wrapper-tab
        position: relative;
        background: #fff;
        height: 180px;
        margin: 0 8px;
</style>
