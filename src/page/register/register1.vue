<template>
   <el-row class="back_color">
      <el-col :span="20" :offset="2">
        <el-col :span="12" class="left" style="margin:30px 0;">
        <div class="reg_main">
           <span class="reg_grain glyphicon glyphicon-grain"></span>
            <div class="reg_wel">
                专注农业领域、打造智慧农业</br>欢迎注册新用户
            </div>
            <span class="reg_star reg_star1 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star2 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star3 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star4 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star5 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star6 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star7 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star8 glyphicon glyphicon-star"></span>
            <span class="reg_star reg_star9 glyphicon glyphicon-star"></span>
            <div class="reg_leaf">
                <span class="glyphicon glyphicon-leaf"></span>
            </div>
            <div class="reg_line"></div>
            <div class="reg_bottom_line"></div>
        </div>
        </el-col>
        <el-col :span="12" class="right" style="margin:30px 0;">
           <el-col :span="14" :offset="5" class="right_main">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用户类型">
                    <el-select v-model="form.type" placeholder="请选择用户类型">
                        <el-option label="政府用户" value="shanghai"></el-option>
                        <el-option label="企业用户" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="登录名称">
                    <el-input v-model="form.user"></el-input>
                </el-form-item>
                <el-form-item label="登录密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码">
                    <el-input v-model="form.repassword"></el-input>
                </el-form-item>
                <el-form-item label="用户名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="负责人姓名">
                    <el-input v-model="form.people"></el-input>
                </el-form-item>
                <el-form-item label="邮箱号码">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号码">
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="所属区域">
                    <!--<el-input v-model="form.distict"></el-input>-->
                    <div class="block">
                        <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions2" @change="handleChange">
                        </el-cascader>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button class="btn_color" @click="onSubmit">立刻注册</el-button>
                </el-form-item>
            </el-form>
           </el-col>
        </el-col>
      </el-col>
   </el-row>

</template>
<script>
  export default {
    data() {
      return {
        form: {
          type: '',
          user: '',
          password: '',
          repassword: '',
          name: '',
          people: '',
          email: '',
          phone: '',
          address: '',
          distict: ''
        },
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
          }, {
            value: 'daohang',
            label: '导航',
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
          }, {
            value: 'form',
            label: 'Form',
          }, {
            value: 'data',
            label: 'Data',
          }, {
            value: 'notice',
            label: 'Notice',
          }, {
            value: 'navigation',
            label: 'Navigation',
          }, {
            value: 'others',
            label: 'Others',
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .back_color
        background:-webkit-gradient(linear,0 0,0 50%,from(#D77584),to(#A24B61))

    .left
        background-color #63D5c3
        min-height 750px
        border-top-left-radius 5px
        border-bottom-left-radius 5px
      //border 1px solid red
    .reg_main
        color #fff
        position relative
    .reg_star
        //font-size 2px
    .reg_star1
        position absolute
        top 380px
        left 100px
    .reg_star2
        position absolute
        top 300px
        left 200px
    .reg_star3
        position absolute
        top 270px
        left 370px
    .reg_star4
        position absolute
        top 300px
        left 540px
    .reg_star5
        position absolute
        top 380px
        left 640px
    .reg_star6
        position absolute
        top 500px
        left 170px
    .reg_star7
        position absolute
        top 390px
        left 250px
    .reg_star8
        position absolute
        top 410px
        left 480px
    .reg_star9
        position absolute
        top 520px
        left 540px
    .reg_grain
        font-size 40px
        margin 10px
    .reg_leaf
        padding-top 50px
        font-size 100px
        text-align center

    .reg_wel
        font-size 30px
        text-align center
        margin 100px
    .reg_line
        border-bottom 1px solid white
        margin 120px 40px 0 40px
    .reg_bottom_line
        border-bottom 1px solid white
        margin 20px 60px 0 60px
    .right
        background-color #3B3E52
        min-height 750px
        border-top-right-radius 5px
        border-bottom-right-radius 5px

    .el-form-item__label
      color #fff

      //border 1px solid red
    .right_main
      padding-top:50px

    .btn_color
      background-color #53c5b9
      color #fff
      border none
      width 200px

    .btn_color:hover
      color #fff


</style>
