<template>
  <div class="product">
    <el-form :model="product">
      <el-form-item label="产品名称" :label-width="formLabelWidth">
        <el-input v-model="product.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="产品介绍" :label-width="formLabelWidth">
        <el-input v-model="product.desc" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="产品介绍" :label-width="formLabelWidth">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>
    export default {
      props: {
        dialogFormVisible: {
            type:Boolean
        }
      },
      data() {
        return {
          form: {
            name: '',
            desc: ''
          },
          formLabelWidth: '120px',
          imageUrl: ''
        }
      },
      computed: {
        product:function () {
          return this.$store.state.product.product;
        }
      },
      methods:{
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-upload__input {
    display: none !important;
  }
</style>
