<template>
  <div class="product">
      <div class="searchArea">
        <el-form :inline="true" :model="filterParam" class="demo-form-inline">
          <el-form-item label="产品名称">
            <el-input v-model="filterParam.name" placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="filterParamInit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="content">
        <div class="btns">
          <el-button-group>
            <el-button type="primary" @click="dialogFormVisible = true">添加<i class="el-icon-plus el-icon--right"></i></el-button>
            <el-button type="primary" @click="modifyProduct">修改<i class="el-icon-edit el-icon--right"></i></el-button>
            <el-button type="primary" @click="delProduct" :loading="delState">删除<i class="el-icon-delete el-icon--right"></i></el-button>
          </el-button-group>
        </div>
        <productTable></productTable>
        <el-dialog title="添加产品" size="tiny" :modal-append-to-body="false" v-model="dialogFormVisible">
          <product-dialog></product-dialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addProductAsync">确 定</el-button>
          </div>
        </el-dialog>
        <!--<productDialog :dialogFormVisible="dialogFormVisible"></productDialog>-->
      </div>
  </div>
</template>
<script>
  import productTable from '../../../components/tables/productList.vue'
  import productDialog from '../../../components/dialog/product.vue'
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        filterParam:{
            name:""
        },
        dialogFormVisible: false,
        delState:false,
        formLabelWidth: '100px'
      }
    },
    methods: {
      filterParamInit(){
        this.$store.commit('filterParamInit', {
          name: this.filterParam.name.trim()
        })
      },
      addProductAsync() {
        this.$store.dispatch('addProductAsync').then(() => {
          this.dialogFormVisible = false;
        });
      },
      modifyProduct() {
        if (this.$store.state.product.product.id) {
          this.dialogFormVisible = true;
        }else{
          this.$message({
            message: '请先选择要修改的产品',
            type: 'warning'
          });
        }
      },
      delProduct() {
        if (this.$store.state.product.product.id) {
          this.delState = true;
          this.$store.dispatch('delProductAsync').then(() => {
            this.delState = false;
          });
        }else{
          this.$message({
            message: '请先选择要删除的产品',
            type: 'warning'
          });
        }
      }
    },
    components:{
      productTable,
      productDialog
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
