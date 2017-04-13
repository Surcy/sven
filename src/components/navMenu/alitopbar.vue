<template>
  <div class="viewFramework-topbar ng-scope">
    <div class="aliyun-console-topbar ng-isolate-scope">
      <div class="topbar-wrap topbar-clearfix">
        <div class="topbar-head topbar-left">
          <a class="topbar-logo topbar-left">
            <!--<span class="icon-logo1"></span>-->
            <span class="glyphicon glyphicon-text-background"></span>
          </a>
          <a class="topbar-home-link topbar-btn topbar-left">
            <span class="ng-binding">管理控制台</span>
          </a>
        </div>
        <div class="topbar-info topbar-right topbar-clearfix">
          <div class="topbar-qrcode topbar-left ng-scope">
            <a class="topbar-btn">
              <!--<span class="icon-qrcode"></span>-->
              <span class="glyphicon glyphicon-qrcode"></span>
              <span class="ng-scope ng-binding">二维码</span>
            </a>
            <div class="topbar-qrcode-panel">
              <div class="topbar-qrcode-image">
                <!--<img src="Application/Admin/View/Default/Images/qrcode.png" widht="100" height="100">-->
              </div>
              <div class="topbar-qrcode-title ng-binding">扫码关注平台动态</div>
            </div>
          </div>
          <div class="dropdown topbar-notice topbar-btn topbar-left ng-scope">
            <a class="dropdown-toggle topbar-btn-notice">
              <!--<span class="topbar-btn-notice-icon icon-bell"></span>-->
              <span class="glyphicon glyphicon-bell"></span>
              <span class="topbar-btn-notice-num ng-binding">22</span>
            </a>
            <div class="topbar-notice-panel">
              <div class="topbar-notice-arrow"></div>
              <div class="topbar-notice-head"><span class="ng-binding">站内消息通知</span></div>
              <div class="topbar-notice-body">
                <ul class="ng-scope">
                  <li class="ng-scope">
                    <a class="clearfix">
                        <span class="inline-block">
                          <span  class="topbar-notice-link ng-binding">【重要通知】阿里云推荐码限量开放申请中，分享9折推荐码，获10%返利！</span>
                          <span class="topbar-notice-time ng-binding">2015-10-23</span>
                        </span>
                      <span class="inline-block topbar-notice-class ng-scope">
                          <span class="topbar-notice-class-name ng-binding">优惠活动</span>
                        </span>
                    </a>
                  </li>
                  <li class="ng-scope">
                    <a class="clearfix" href="#">
                        <span class="inline-block">
                          <span class="topbar-notice-link ng-binding">参与云服务器优化调研，赢100元通用代金券！</span>
                          <span class="topbar-notice-time ng-binding">2015-10-16</span>
                        </span>
                      <span class="inline-block topbar-notice-class ng-scope">
                          <span class="topbar-notice-class-name ng-binding">问卷回访</span>
                        </span>
                    </a>
                  </li>
                  <li ng-repeat="item in messages.messageList"
                      ng-class="{'topbar-notice-readed':item.readed}" class="ng-scope">
                    <a ng-href="#" target="_blank" class="clearfix" ng-click="readMessage(item)"
                       aliyun-console-spm="402" data-spm-click="gostr=/aliyun;locaid=d402;;"
                       href="#"><span class="inline-block"><span class="topbar-notice-link ng-binding"
                                                                 ng-bind="item.title">【新生宝贝】美国硅谷第二可用区正式上线！ ECS88折活动10.10~11.9仅此一月</span> <span
                      class="topbar-notice-time ng-binding" ng-bind="item.formatCreatedTime">2015-10-12</span></span>
                      <!-- ngIf: item.className --><span
                        class="inline-block topbar-notice-class ng-scope"
                        ng-if="item.className"><span
                        class="topbar-notice-class-name ng-binding">产品动态</span></span>
                      <!-- end ngIf: item.className -->
                    </a>
                  </li>
                  <!-- end ngRepeat: item in messages.messageList -->
                  <li ng-repeat="item in messages.messageList"
                      ng-class="{'topbar-notice-readed':item.readed}" class="ng-scope">
                    <a ng-href="#" target="_blank" class="clearfix" ng-click="readMessage(item)"
                       aliyun-console-spm="403" data-spm-click="gostr=/aliyun;locaid=d403;;"
                       href="#"><span class="inline-block"><span class="topbar-notice-link ng-binding"
                                                                 ng-bind="item.title">阿里云 ACE 产品问卷调查</span> <span
                      class="topbar-notice-time ng-binding" ng-bind="item.formatCreatedTime">2015-10-12</span></span>
                      <!-- ngIf: item.className --><span
                        class="inline-block topbar-notice-class ng-scope"
                        ng-if="item.className"><span
                        class="topbar-notice-class-name ng-binding">问卷回访</span></span>
                      <!-- end ngIf: item.className -->
                    </a>
                  </li>
                  <!-- end ngRepeat: item in messages.messageList -->
                  <li ng-repeat="item in messages.messageList"
                      ng-class="{'topbar-notice-readed':item.readed}" class="ng-scope">
                    <a ng-href="#" target="_blank" class="clearfix" ng-click="readMessage(item)"
                       aliyun-console-spm="404" data-spm-click="gostr=/aliyun;locaid=d404;;"
                       href="#"><span class="inline-block"><span class="topbar-notice-link ng-binding"
                                                                 ng-bind="item.title">【重要通知】阿里云推荐码返利升级，10%返利+50元额外奖励等你拿！</span> <span
                      class="topbar-notice-time ng-binding" ng-bind="item.formatCreatedTime">2015-09-17</span></span>
                      <!-- ngIf: item.className --><span
                        class="inline-block topbar-notice-class ng-scope"
                        ng-if="item.className"><span
                        class="topbar-notice-class-name ng-binding">优惠活动</span></span>
                      <!-- end ngIf: item.className -->
                    </a>
                  </li>
                  <!-- end ngRepeat: item in messages.messageList -->
                </ul>
                <!-- end ngIf: messages && messages.messageList.length >0 -->
                <!-- ngIf: !messages ||  messages.messageList.length == 0 -->
              </div>
              <div class="topbar-notice-foot"><a class="topbar-notice-more ng-binding" target="_blank"
                                                 ng-href="#" aliyun-console-spm="401"
                                                 data-spm-click="gostr=/aliyun;locaid=d401;;"
                                                 href="#">查看更多</a></div>
            </div>
          </div>
          <!-- end ngIf: messages && messages.total >=0 && navLinks.message.show -->
          <!-- AccessKeys -->
          <!-- ngIf: navLinks.accesskeys.show -->
          <div class="topbar-left topbar-accesskeys topbar-info-item ng-scope"><a href="javascript:;"
                                                                                  data-url="/index.php?s=/Common/alipay.html"
                                                                                  class="topbar-btn ng-binding groupAuth">支付弹窗
                    <!-- ngIf: navLinks.accesskeys.showNew --></a></div>
          <!-- end ngIf: navLinks.accesskeys.show -->
          <!-- 工单 -->
          <!-- ngIf: navLinks.workorder.show -->

          <!-- end ngIf: navLinks.workorder.show -->
          <!-- 备案 -->
          <!-- ngIf: navLinks.icp.show -->
          <div class="topbar-left topbar-accesskeys topbar-info-item ng-scope"><a href="javascript:;"
                                                                                  data-url="/index.php?s=/Public/clearAdminCache.html"
                                                                                  class="topbar-btn ng-binding delete">清理缓存
                    <!-- ngIf: navLinks.icp.showNew --></a></div>
          <!-- end ngIf: navLinks.icp.show -->
          <!-- 帮助 -->
          <!-- ngIf: navLinks.help.show -->
          <div class="topbar-left topbar-help topbar-info-item ng-scope" ng-if="navLinks.help.show">
            <div class="dropdown"><a href="javascript:;" class="dropdown-toggle topbar-btn"><span
              class="ng-binding" id="help">等待添加</span><!-- ngIf: navLinks.help.showNew -->
              <!--<span class="icon-arrow-down"></span>-->
              <span class="glyphicon glyphicon-triangle-bottom"></span>
            </a>
              <ul class="dropdown-menu">
                <!-- ngRepeat: link in navLinks.help.links -->
                <li class="topbar-info-btn ng-scope"><a href="#" target="_blank"><span class="ng-binding">等待添加</span>
                  <!-- ngIf: link.showNew --></a></li>
                <!-- end ngRepeat: link in navLinks.help.links -->
                <li class="topbar-info-btn ng-scope"><a href="#" target="_blank"><span class="ng-binding">等待添加</span>
                  <!-- ngIf: link.showNew --></a></li>
                <!-- end ngRepeat: link in navLinks.help.links -->
                <li class="topbar-info-btn ng-scope"><a href="#" target="_blank"><span class="ng-binding">等待添加</span>
                  <!-- ngIf: link.showNew --></a></li>
                <!-- end ngRepeat: link in navLinks.help.links -->
                <li class="topbar-info-btn ng-scope"><a href="#" target="_blank"><span class="ng-binding">等待添加</span>
                  <!-- ngIf: link.showNew --></a></li>
                <!-- end ngRepeat: link in navLinks.help.links -->
              </ul>
            </div>
          </div>
          <div class="topbar-left ng-scope">
            <div id='loginOut' class="dropdown topbar-info-item">
              <a href="javascript:;" class="dropdown-toggle topbar-btn">
                <span class="ng-binding">413039830@qq.com</span>
                <!--<span class="icon-arrow-down"></span>-->
                <span class="glyphicon glyphicon-triangle-bottom"></span>
              </a>
              <ul class="dropdown-menu">
                <!-- ngRepeat: link in navLinks.user.links -->
                <li class="topbar-info-btn ng-scope">
                  <a href="/index.php?s=/Public/loginOut.html" target="_self"><span
                    class="ng-binding">退出</span></a>
                </li>
                <!-- end ngRepeat: link in navLinks.user.links -->
              </ul>
            </div>
          </div>
          <!-- end ngIf: navLinks.user.show -->
          <!-- 国际化 -->
          <!-- ngIf: navLinks.i18n.show && navLinks.i18n.currentLanguage -->
        </div>
        <!-- ngIf: navLinks.assist.show && helpConfig -->
      </div>
    </div>
    <!-- /topbar -->
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/aliyunNav/Css/console1412.css'
</style>
