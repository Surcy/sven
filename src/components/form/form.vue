<template>
  <el-row>
    <el-col :span="12">
      <div class="wrapper_register">
        <div class="title">注册</div>
        <el-form label-position="left" ref="form" :model="form" label-width="80px" class="left-form">
          <el-form-item label="输入">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="下拉选择 ">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="选项1" value="shanghai"></el-option>
              <el-option label="选项2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择时间">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="switch按钮">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="多选题">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="选项1" name="type"></el-checkbox>
              <el-checkbox label="选项2" name="type"></el-checkbox>
              <el-checkbox label="选项3" name="type"></el-checkbox>
              <el-checkbox label="选项4" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选">
            <el-radio-group v-model="form.resource">
              <el-radio label="单选1"></el-radio>
              <el-radio label="单选2"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">按钮1</el-button>
            <el-button>按钮2</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="wrapper_register">
        <div class="title">表单</div>
        <el-form ref="form" :model="form" label-width="80px" class="left-form">
          <el-form-item label="数字输入">
            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
          </el-form-item>
          <el-form-item label="slider滑块">
            <div class="block">
              <el-slider v-model="value2"></el-slider>
            </div>
          </el-form-item>
          <el-form-item label="时间选择">
            <el-time-picker
              v-model="value3"
              :picker-options="{
                                  selectableRange: '18:30:00 - 20:30:00'
                               }"
              placeholder="任意时间点">
            </el-time-picker>
          </el-form-item>
          <el-form-item label="图片上传">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="fileList2"
              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="评分">
            <el-rate
              v-model="value4"
              show-text>
            </el-rate>          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">按钮1</el-button>
            <el-button>按钮2</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        num1: 1,
        value2: 50,
        value3:'',
        value4:'',
        fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper_register
    margin-right 15px
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    .title
      height 40px
      line-height 40px
      text-align center
      background-color #e5e6e7
      margin-bottom 15px
    .left-form
      width 400px
      padding 0px 24px
</style>
