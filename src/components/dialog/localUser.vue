<template>
  <div class="user">
    <el-form :model="currentUser">
      <el-form-item label="用户名称" :label-width="formLabelWidth">
        <el-input v-model="currentUser.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="负责人名称" :label-width="formLabelWidth">
        <el-input v-model="currentUser.people" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" :label-width="formLabelWidth">
        <el-input v-model="currentUser.phone" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="所属区域" :label-width="formLabelWidth">
        <el-input v-model="currentUser.district" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="currentUser.address" auto-complete="off"></el-input>
      </el-form-item>
      <!--<el-form-item label="产品图片" :label-width="formLabelWidth">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>-->
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
            people: '',
						phone: '',
						district: '',
						address: ''
          },
          formLabelWidth: '120px',
          //imageUrl: ''
        }
      },
      computed: {
        currentUser:function () {
          return this.$store.state.localUser.currentUser;
        }
      }/*,
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
      }*/
    }
</script>

<style lang="stylus" scoped>
	.user {width:280px;}
	.el-dialog--tiny {
    width: 100%;
  }

</style>
