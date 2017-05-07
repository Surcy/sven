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
          <el-button type="primary" @click="showAddInfo">添加<i class="el-icon-plus el-icon--right"></i></el-button>
          <el-button type="primary" @click="showUpdateInfo">修改<i class="el-icon-edit el-icon--right"></i></el-button>
          <el-button type="primary" @click="delInfo" :loading="delState">删除<i class="el-icon-delete el-icon--right"></i></el-button>
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
          :prop="item.alia"
				  >
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[2, 4, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalLen">
        </el-pagination>
      </div>
      <!--添加肥料信息开始-->
      <el-dialog :title="addOrSaveTxt" v-model="showInfoDialog" :modal-append-to-body="false">
        <el-form :inline="true" label-position="right" :model="infoForm" class="demo-form-inline">
          <el-row :gutter="10">
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="企业名称">
                <el-input v-model="infoForm.companyName" placeholder="企业名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="肥料名称">
                <el-input v-model="infoForm.ferName" placeholder="肥料名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="养分含量标识" >
                <el-input v-model="infoForm.ingredient" placeholder="养分含量标识"></el-input>
              </el-form-item>
            </el-col>
						<el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="肥料生产商">
                <el-input v-model="infoForm.ferCompany" placeholder="肥料生产商"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="肥料生产商地址">
                <el-input v-model="infoForm.address" placeholder="肥料生产商地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="登记证号">
                <el-input v-model="infoForm.logo" placeholder="肥料登记证号"></el-input>
              </el-form-item>
            </el-col>
						<el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="生产许可证号">
                <el-input v-model="infoForm.license" placeholder="肥料生产许可证号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="12" :lg="12">
              <el-form-item label-width="130px" label="保质期">
                <el-input v-model="infoForm.guarantee" placeholder="保质期"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="btns">
          <el-button @click="showInfoDialog = false">取消</el-button>
          <el-button v-if="addOrSave === 'add'" type="primary" @click="addInfo">添加</el-button>
          <el-button v-else-if="addOrSave === 'save'" type="primary" @click="showInfoDialog = false">保存</el-button>
        </div>
      </el-dialog>
      <!--添加肥料信息结束-->
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
				pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
				ferTime:'',
        filterKey:'',
        delState:false,
        formLabelWidth: '100px',
				/*manuTime:'',*/
        title:[
          {"name":"ID","alia":"id"},
          {"name":"生产企业名称","alia":"companyName"},
          {"name":"肥料名称","alia":"ferName"},
					{"name":"养分含量标识","alia":"ingredient"},
          {"name":"肥料生产商","alia":"ferCompany"},
          {"name":"登记证号","alia":"logo"},
					{"name":"生产许可证号","alia":"license"},
					{"name":"保质期","alia":"guarantee"},
        ],
        infoList:[
          {
            id: '1',
            companyName: '黄山小荷里茶业有限公司',
            ferName: '肥料名称',
						ingredient: '养分含量标识',
            ferCompany: '肥料生产商',
            logo: '登记证号',
            license: '生产许可证号',
						guarantee: '保质期',
          },
          {
            id: '2',
            companyName: '黄山小荷里茶业有限公司',
            ferName: '肥料名称',
						ingredient: '养分含量标识',
            ferCompany: '肥料生产商',
            logo: '登记证号',
            license: '生产许可证号',
						guarantee: '保质期',
          },
          {
            id: '3',
            companyName: '黄山小荷里茶业有限公司',
            ferName: '肥料名称',
						ingredient: '养分含量标识',
            ferCompany: '肥料生产商',
            logo: '登记证号',
            license: '生产许可证号',
						guarantee: '保质期',
          },
          {
            id: '4',
            companyName: '黄山小荷里茶业有限公司',
            ferName: '肥料名称',
						ingredient: '养分含量标识',
            ferCompany: '肥料生产商',
            logo: '登记证号',
            license: '生产许可证号',
						guarantee: '保质期',
          },
          {
            id: '5',
            companyName: '黄山小荷里茶业有限公司',
            ferName: '肥料名称',
						ingredient: '养分含量标识',
            ferCompany: '肥料生产商',
            logo: '登记证号',
            license: '生产许可证号',
						guarantee: '保质期',
          }],
        currentPage:1,
        pageSize:2,
        totalLen:0,
        showBaiduMap:false,
        showInfoDialog:false,
        selectInfo:{},

        infoForm:{
//          id:'',
//          companyName:'',
//          infoName:'',
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
        let newData = this.infoList;
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
      showAddInfo(){
        this.infoForm={};
        this.addOrSave = 'add';
        this.addOrSaveTxt = '添加施药信息';
        this.showInfoDialog = true;
      },
      //添加肥料信息
      addInfo(){
        this.infoForm.id = this.filterList.length?this.filterList[this.filterList.length-1].id*1+1:1;
        this.filterList.push(this.infoForm);
        this.showInfoDialog = false;
      },
      //显示修改肥料信息模态框
      showUpdateInfo (){
          if (!this.selectInfo.id){
            this.$message({
              message: '请选择需要修改的信息',
              type: 'success'
            });
            return false;
          }
          this.infoForm= this.selectInfo;
          this.addOrSave = 'save';
          this.addOrSaveTxt = '保存信息';
          this.showInfoDialog = true;
      },
      //删除肥料信息
      delInfo(){
        if (!this.selectInfo.id){
          this.$message({
            message: '请选择需要删除的信息',
            type: 'success'
          });
          return false;
        }
        this.delState = true;
        setTimeout(_ => {
          let infoId = this.selectInfo && this.selectInfo.id;
          for (let i=0;i<this.filterList.length;i++){
            if (this.filterList[i].id === infoId){
              this.filterList.splice(i, 1);
              this.selectInfo = {};
            }
          }
          this.delState = false;
        },500)
      },
      handleRowClick(row, event, column){
        this.selectInfo = row;
      }
    },

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
