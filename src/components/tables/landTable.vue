<template>
  <div>
    <el-table
      :data="filterList"
      style="width: 100%"
      stripe
      highlight-current-row
      @row-click="handleRowClick">
      <el-table-column
        v-for="item in title"
        :label="item.name"
        :prop="item.alia">
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
  import {mapGetters, mapMutations } from 'vuex'
  export default {
    props:{
        title:[],
        filterList:[],
    },
    methods:{
      handleRowClick(row, event, column){
        this.$store.commit('updateLand',{
          land:row
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
