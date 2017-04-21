<template>
  <div class="wrapper">
    <div class="topbar">
      <el-tabs type="border-card">
        <el-tab-pane label="基本资料">
            <el-row>
              <el-col :span="14" style="border-right: 1px solid #E6E4E1">
                <div class="wrapper-left">
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="企业名称">
                      <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="企业地址">
                      <el-input v-model="form.address"></el-input>
                    </el-form-item>
                    <el-form-item label="企业商标">
                      <el-input v-model="form.trademark"></el-input>
                    </el-form-item>
                    <el-form-item label="产品服务">
                      <el-input v-model="form.service"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                      <el-input v-model="form.contacts"></el-input>
                    </el-form-item>
                    <el-form-item label="联系方式">
                      <el-input v-model="form.number"></el-input>
                    </el-form-item>
                    <el-form-item label="企业网址">
                      <el-input v-model="form.website"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-button type="primary" :loading="btnState" @click="save()">保存</el-button>
                </div>
              </el-col>
              <el-col :span="10" class="wrapper-right">
                <div class="grid-content bg-purple-light"></div>
                <baidumap></baidumap>
              </el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="认证信息">
        </el-tab-pane>
        <el-tab-pane label="企业成就">

        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
  import baidumap from '../../../components/baidumap/baidumap.vue'
  export default {
    data() {
      return {
        form: {
          name: '',
          address: '',
          trademark: '',
          service: '',
          contacts: '',
          number: '',
          website: ''
        },
        btnState:false
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      save() {
          this.btnState = !this.btnState;
          setTimeout(()=>{
              this.btnState = !this.btnState;
          },1000)
      }
    },
    components: {
      baidumap
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    margin auto auto;
    .topbar
      background-color #F5F4F3
      .wrapper-left
        width: 400px;
        text-align: center;
</style>
