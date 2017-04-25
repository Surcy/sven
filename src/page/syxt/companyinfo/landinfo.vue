<template>
  <div class="wrapper">
    <div class="wrapper-filter">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="产品名称">
          <el-input icon="search" v-model="filterKey" placeholder="名称"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div class="btns">
        <el-button-group>
          <el-button type="primary" @click="showBaiduMap = true">地块查看<i class="el-icon-search el-icon--right"></i></el-button>
          <el-button type="primary" @click="updateShowDialog">添加<i class="el-icon-plus el-icon--right"></i></el-button>
          <el-button type="primary" @click="">修改<i class="el-icon-edit el-icon--right"></i></el-button>
          <el-button type="primary" @click="" :loading="delState">删除<i class="el-icon-delete el-icon--right"></i></el-button>
        </el-button-group>
      </div>
      <landTable :title="title" :filterList="filterList"></landTable>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalLen">
        </el-pagination>
      </div>
      <!--百度地图开始-->
      <el-dialog title="查看地块位置" size="large" v-model="showBaiduMap" :modal-append-to-body="false">
        <landMap></landMap>
      </el-dialog>
      <!--百度地图结束-->
      <!--添加地块开始-->
      <el-dialog title="添加地块" v-model="showDialog" :modal-append-to-body="false">
        <landDialog></landDialog>
      </el-dialog>
      <!--添加地块结束-->
    </div>
  </div>
</template>
<script>
  import landTable from '../../../components/tables/landTable.vue'
  import landMap from '../../../components/baidumap/landMap.vue'
  import landDialog from '../../../components/dialog/land.vue'
  import {mapGetters, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        filterKey:'',
        dialogFormVisible: false,
        delState:false,
        formLabelWidth: '100px',
        title:this.$store.state.land.title,
        landList: this.$store.state.land.landList,
        currentPage:1,
        pageSize:10,
        totalLen:0,
        showBaiduMap:false
      }
    },
    created(){
      this.$nextTick(()=>{

      })
    },
    computed:{
      filterList(){
        let newData = this.landList;
        let filterKey = this.filterKey && this.filterKey.trim();
        if (filterKey) {
          newData = newData.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).indexOf(filterKey)>-1
            })
          });
        }
        this.totalLen = newData.length;
        return newData.slice((this.currentPage-1)*this.pageSize,(this.currentPage-1)*this.pageSize+this.pageSize);
      },
      showDialog(){
          return this.$store.state.land.showDialog
      }
    },
    methods: {
      //弹窗控制
      updateShowDialog(){
        this.$store.commit('updateShowDialog');
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      }
    },
    components:{
      landTable,
      landDialog,
      landMap
    }
  }
</script>

<style lang="stylus" scoped>
  .el-form-item {
    margin-bottom: 0;
  }
  .wrapper-filter
    background-color #FFF
    padding 10px
  .content
    background-color #FFF
    padding 10px
    margin-top 10px
    .btns
      text-align right
      margin-bottom 10px

  .block{
    text-align: right;
    margin-top: 10px
  }
</style>
