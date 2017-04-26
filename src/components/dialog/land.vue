<template>
  <div class="wrapper">
    <el-form :inline="true" label-position="right" :model="landForm" class="demo-form-inline">
  <el-row :gutter="10">
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <el-form-item label-width="80px" label="企业名称">
        <el-select v-model="landForm.companyName" placeholder="">
          <el-option label="黄山小荷里茶业有限公司" value="黄山小荷里茶业有限公司"></el-option>
        </el-select>
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
      <el-button>取消</el-button>
      <el-button type="primary" @click="addLand">添加</el-button>
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapMutations } from 'vuex'
  export default {
    props:{
      landForm:{}
    },
  methods:{
    //添加地块信息
    addLand() {
      this.$store.commit('addLand',{
        land:this.landForm
      });
      this.$store.commit('updateShowDialog');
    },
  }
}
</script>

<style lang="stylus" scoped>
  .btns
    text-align right
</style>
