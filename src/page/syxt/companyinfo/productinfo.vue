<template>
  <div class="product">
      <div class="searchArea">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="产品名称">
            <el-input v-model="formInline.user" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item label="包装规格">
            <el-input v-model="formInline.user" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item label="保质期">
            <el-input v-model="formInline.user" placeholder="名称"></el-input>
          </el-form-item>
          <!--<el-form-item>-->
            <!--<el-button type="primary" @click="onSubmit">查询</el-button>-->
          <!--</el-form-item>-->
        </el-form>
      </div>
      <div class="content">
        <div class="btns">
          <el-button-group>
            <el-button type="primary" @click="dialogFormVisible = true">添加<i class="el-icon-plus el-icon--right"></i></el-button>
            <el-button type="primary">修改<i class="el-icon-edit el-icon--right"></i></el-button>
            <el-button type="primary">删除<i class="el-icon-delete el-icon--right"></i></el-button>
          </el-button-group>
        </div>
        <productTable></productTable>
        <el-dialog title="收货地址" v-model="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>

  </div>
</template>
<script>
  import productTable from '../../../components/tables/productList.vue'
  export default {
    data() {
      return {
        filter:{
            name:"",
            size:"",
        },
        formInline: {
          user: '',
          region: '',

        },
        dialogFormVisible: false,
        form: {
          name: '',
          region: ''
        },
        formLabelWidth: '120px'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    components:{
      productTable:productTable
    }
  }
</script>

<style lang="stylus" scoped>

  .el-form-item {
    margin-bottom: 0;
  }
  .searchArea
    background-color #FFF
    padding 10px
  .content
    background-color #FFF
    padding 10px
    margin-top 10px
    .btns
      text-align right
      margin-bottom 10px
</style>
