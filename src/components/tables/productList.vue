<template>
  <div>
    <el-table
    :data="filterList"
    style="width: 100%"
    stripe
    highlight-current-row
    @current-change="handleCurrentChange">
    <el-table-column type="expand">
      <template scope="props">
        <el-row>
          <el-col :span="12">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
              <el-form-item label="商品图片">
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="12">
            <div class="icon">
            </div>
          </el-col>
        </el-row>
      </template>
    </el-table-column>
    <el-table-column
      label="产品编码"
      prop="id">
    </el-table-column>
    <el-table-column
      label="产品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="产品介绍"
      prop="desc">
    </el-table-column>
  </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4">
      </el-pagination>
    </div>
  </div>
</template>
<script>
 import { mapGetters} from 'vuex'
  export default {
    data() {
      return {
        table: [
        {
          id: '12987122',
          name: '六安瓜片',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '黄山毛峰',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '浙江龙井',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '福建普洱',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        currentRow: null
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
        this.$store.state.product.product = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      }
    },
    computed: mapGetters({
      filterList:'filterList'
    }),
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
  .icon{
    width: 100px;
    height: 100px;
    background-image url("http://eco.ahau.edu.cn/xyd/Uploads/tea_product/58dc705d31418.jpg")
    background-size 100px 100px
  }
</style>
