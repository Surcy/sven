<template>
<div>
    <el-table
    :data="filterUser"
    style="width: 100%"
    stripe
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column type="expand">
      <template scope="props">
        <el-row>
          <el-col :span="24">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="所属区域">
                <span>{{ props.row.district }}</span>
              </el-form-item>
              <el-form-item label="地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </template>
    </el-table-column>
    <el-table-column
      label="用户id"
      prop="id">
    </el-table-column>
    <el-table-column
      label="用户名称"
      prop="user">
    </el-table-column>
    <el-table-column
      label="负责人姓名"
      prop="people">
    </el-table-column>
    <el-table-column
      label="手机号码"
      prop="phone">
    </el-table-column>
  </el-table>

    <!--<div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4">
      </el-pagination>
    </div>-->
  </div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
        this.$store.state.localUser.localUser = val;
        console.log(this.currentRow);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }
    },
		computed: mapGetters({
				filterUser: 'filterUser'
		})
	}
</script>

<style lang="stylus" scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .block{
    text-align right
    margin-top 10px
  }
</style>
