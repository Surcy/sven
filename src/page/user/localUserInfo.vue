<template>
	<div class="user">
		<div class="searchArea">
			<el-form :inline="true" :model="filterParam" class="demo-form-inline">
				<el-form-item label="用户名称">
					<el-input  v-model="filterParam.user" placeholder="名称"></el-input>
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
            <el-button type="primary" @click="modifyUser">修改<i class="el-icon-edit el-icon--right"></i></el-button>
            <el-button type="primary" @click="delUser" :loading="delState">删除<i class="el-icon-delete el-icon--right"></i></el-button>
          </el-button-group>
        </div>
        <localUserTable></localUserTable>
        <el-dialog title="添加用户" size="tiny" :modal-append-to-body="false" v-model="dialogFormVisible">
          <localUserDialog></localUserDialog>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUserAsync">确 定</el-button>
          </div>
        </el-dialog>
		</div>
	</div>
</template>
<script>
	import localUserTable from '../../components/tables/localUserList.vue'
	import localUserDialog from '../../components/dialog/localUser.vue'
	import {mapActions} from 'vuex'
	export default{
		data(){
			return {
				filterParam: {
					user:""
				},
				dialogFormVisible:false,
				delState:false,
				formLabelWidth: '100px'
			}
		},
		methods:{
			filterParamInit(){
        this.$store.commit('filterParamInit', {
          user: this.filterParam.user.trim()
        })
      },
		addUserAsync() {
			this.$store.dispatch('addUserAsync').then(() => {
				this.dialogFormVisible = false;
			});
		},
		modifyUser() {
			if (this.$store.state.localUser.currentUser.id) {
				this.dialogFormVisible = true;
			}else{
				this.$message({
					message: '请先选择要修改的产品',
					type: 'warning'
				});
			}
		},
		delUser() {
			if (this.$store.state.localUser.currentUser.id) {
				this.delState = true;
				this.$store.dispatch('delUserAsync').then(() => {
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
      localUserTable,
			localUserDialog
    }
	}
</script>

<style lang="stylus" scoped>
  .el-form-item {
    margin-bottom: 0;
  }
	.searchArea{
		background-color: #fff;
		padding:10px;
		//height:50px;
	}
	.content
		background-color #fff
		padding 10px
		margin-top 10px
	.btns
		text-align right
		margin-bottom 10px

</style>
