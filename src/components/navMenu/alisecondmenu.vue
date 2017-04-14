<template>
  <div>
    <div class="product-nav-title ng-binding">基本信息</div>
    <div class="product-nav-list" id="product-nav-list">
      <ul class="submenu-1 hidden" data-submenu="1">
        <router-link to="/basicinfo">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">企业信息</div>
            </a>
          </div>
        </li>
        </router-link>
        <router-link to="/productinfo">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/System/reg.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">产品信息</div>
            </a>
          </div>
        </li>
        </router-link>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Payment/index.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">行政区域信息</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Notify/index.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">字典信息</div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="submenu-3 hidden" data-submenu="3">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Member/localUser.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">本地用户</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Member/oauth.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">第三方用户</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Member/groupList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">会员等级</div>
            </a>
          </div>
        </li>
        <li class="nav-showchild">
          <div class="ng-isolate-scope checkChild">
            <a href="javascript:;" class="ng-scope">
              <div class="nav-icon">
                <span class="icon-arrow-down"></span>
              </div>
              <div class="nav-title ng-binding" ng-bind="item.title">
                会员返利
            </div>
            </a>
          </div>
          <!-- ngIf: item.childs -->
          <ul class="ng-scope ishidden hidden">
            <!-- ngRepeat: childItem in item.childs -->
            <li>
              <div class="ng-isolate-scope">
                <a href="javascript:;"
                   data-url="/index.php?s=/Admin/Member/refereeList.html" class="ng-scope">
                  <div class="nav-icon"></div>
                  <div class="nav-title ng-binding">邀请返利列表</div>
                </a>
              </div>
            </li>
            <!-- end ngRepeat: childItem in item.childs -->
          </ul>
          <!-- end ngIf: item.childs -->
        </li>
      </ul>
      <ul class="submenu-4 hidden" data-submenu="4">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Access/authList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">管理列表</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Access/roleList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">角色列表</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Access/nodeList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">节点列表</div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="submenu-11 hidden" data-submenu="11">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Database/exportList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">备份数据</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Database/importList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">还原数据</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Database/repairList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">优化修复</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Database/zipList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">压缩列表</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Database/fileList.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">文件管理</div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="submenu-13 hidden" data-submenu="13">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Monitor/regCount.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">注册统计</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Monitor/actionLog.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">行为日志</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Monitor/actionCount.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">行为统计</div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="submenu-50 hidden" data-submenu="50">
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;"  class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">插件管理</div>
            </a>
          </div>
        </li>
        <li>
          <div class="ng-isolate-scope">
            <a href="javascript:;" data-url="/index.php?s=/Admin/Addons/hooks.html"
               class="ng-scope">
              <div class="nav-icon"></div>
              <div class="nav-title ng-binding">钩子管理</div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    created() {

    }
  }
</script>

<style lang="stylus" scoped>
</style>
