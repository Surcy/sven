<template>
  <div class="wrapper">
    <div class="wrapper-filter">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="地块名称">
          <el-input icon="search" v-model="filterKey" placeholder="名称"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div class="btns">
        <el-button-group>
          <el-button type="primary" @click="showBaiduMap = true">地块查看<i class="el-icon-search el-icon--right"></i></el-button>
          <el-button type="primary" @click="showAddLand">添加<i class="el-icon-plus el-icon--right"></i></el-button>
          <el-button type="primary" @click="showUpdateLand">修改<i class="el-icon-edit el-icon--right"></i></el-button>
          <el-button type="primary" @click="delLand" :loading="delState">删除<i class="el-icon-delete el-icon--right"></i></el-button>
        </el-button-group>
      </div>
      <el-table
        :data="filterList"
        style="width: 100%"
        stripe
        highlight-current-row
        @row-click="handleRowClick">
        <el-table-column
          v-for="item in title"
          :label="item.name"
          :prop="item.alia">
        </el-table-column>
      </el-table>
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
      <el-dialog :title="addOrSaveTxt" v-model="showLandDialog" :modal-append-to-body="false">
        <el-form :inline="true" label-position="right" :model="landForm" class="demo-form-inline">
          <el-row :gutter="10">
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="企业名称">
                <el-input v-model="landForm.companyName" placeholder="企业名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="地块名称">
                <el-input v-model="landForm.landName" placeholder="地块名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="负责人" >
                <el-input v-model="landForm.charger" placeholder="负责人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="联系方式">
                <el-input v-model="landForm.phone" placeholder="联系方式"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="经度">
                <el-input v-model="landForm.jd" placeholder="经度"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="纬度">
                <el-input v-model="landForm.wd" placeholder="纬度"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="面积">
                <el-input v-model="landForm.area" placeholder="面积"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="80px" label="海拔">
                <el-input v-model="landForm.height" placeholder="海拔"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="btns">
          <el-button @click="showLandDialog = false">取消</el-button>
          <el-button v-if="addOrSave === 'add'" type="primary" @click="addLand">添加</el-button>
          <el-button v-else-if="addOrSave === 'save'" type="primary" @click="showLandDialog = false">保存</el-button>
        </div>
      </el-dialog>
      <!--添加地块结束-->
    </div>
  </div>
</template>
<script>
  import landMap from '../../../components/baidumap/landMap.vue'
  export default {
    data() {
      return {
        filterKey:'',
        delState:false,
        formLabelWidth: '100px',
        title:[
          {"name":"ID","alia":"id"},
          {"name":"生产企业名称","alia":"companyName"},
          {"name":"地块名称","alia":"landName"},
          {"name":"地块负责人","alia":"charger"},
          {"name":"海拔","alia":"height"},
          {"name":"联系方式","alia":"phone"},
          {"name":"经度","alia":"jd"},
          {"name":"纬度","alia":"wd"},
          {"name":"面积","alia":"area"},
        ],
        landList:[
          {
            id: '1',
            companyName: '黄山小荷里茶业有限公司',
            landName: '谭家桥茶林场6队',
            charger: '叶增明',
            height: '100',
            phone: '联系方式',
            jd: '东经E118°16′48.34″',
            wd:'北纬N30°07′20.48″',
            area:'921亩'
          },
          {
            id: '2',
            companyName: '黄山小荷里茶业有限公司',
            landName: '谭家桥茶林场6队',
            charger: '叶增明',
            height: '100',
            phone: '联系方式',
            jd: '东经E118°16′48.34″',
            wd:'北纬N30°07′20.48″',
            area:'921亩'
          },
          {
            id: '3',
            companyName: '黄山小荷里茶业有限公司',
            landName: '谭家桥茶林场6队',
            charger: '叶增明',
            height: '100',
            phone: '联系方式',
            jd: '东经E118°16′48.34″',
            wd:'北纬N30°07′20.48″',
            area:'921亩'
          },
          {
            id: '4',
            companyName: '六安瓜片',
            landName: '谭家桥茶林场6队',
            charger: '叶增明',
            height: '100',
            phone: '联系方式',
            jd: '东经E118°16′48.34″',
            wd:'北纬N30°07′20.48″',
            area:'921亩'
          },
          {
            id: '5',
            companyName: '六安瓜片',
            landName: '谭家桥茶林场6队',
            charger: '叶增明',
            gender: '男',
            phone: '联系方式',
            jd: '东经E118°16′48.34″',
            wd:'北纬N30°07′20.48″',
            area:'921亩'
          }],
        currentPage:1,
        pageSize:10,
        totalLen:0,
        showBaiduMap:false,
        showLandDialog:false,
        selectLand:{},
        landForm:{
//          id:'',
//          companyName:'',
//          landName:'',
//          charger:'',
//          phone:'',
//          jd:'',
//          wd:'',
//          area:'',
//          height:''
        },
        addOrSave:'',
        addOrSaveTxt:''
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
      }
    },
    methods: {
      //翻页控制
      handleSizeChange(val) {
        this.pageSize = val;
      },
      //翻页控制
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      //显示添加模态框
      showAddLand(){
        this.landForm={};
        this.addOrSave = 'add';
        this.addOrSaveTxt = '添加地块';
        this.showLandDialog = true;
      },
      //添加地块信息
      addLand(){
        this.landForm.id = this.filterList.length?this.filterList[this.filterList.length-1].id*1+1:1;
        this.filterList.push(this.landForm);
        this.showLandDialog = false;
      },
      //显示修改地块信息模态框
      showUpdateLand (){
          if (!this.selectLand.id){
            this.$message({
              message: '请选择需要修改的地块',
              type: 'success'
            });
            return false;
          }
          this.landForm= this.selectLand;
          this.addOrSave = 'save';
          this.addOrSaveTxt = '保存地块';
          this.showLandDialog = true;
      },
      //删除地块信息
      delLand(){
        if (!this.selectLand.id){
          this.$message({
            message: '请选择需要删除的地块',
            type: 'success'
          });
          return false;
        }
        this.delState = true;
        setTimeout(_ => {
          let landId = this.selectLand && this.selectLand.id;
          for (let i=0;i<this.filterList.length;i++){
            if (this.filterList[i].id === landId){
              this.filterList.splice(i, 1);
              this.selectLand = {};
            }
          }
          this.delState = false;
        },500)
      },
      handleRowClick(row, event, column){
        this.selectLand = row;
      }
    },
    components:{
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
