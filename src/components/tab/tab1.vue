<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="新闻1" name="first" class="content">新闻1</el-tab-pane>
    <el-tab-pane label="新闻2" name="second" class="content">新闻2</el-tab-pane>
    <el-tab-pane label="新闻3" name="third" class="content">新闻3</el-tab-pane>
    <el-tab-pane label="新闻4" name="fourth" class="content">新闻4</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .content {
    font-size: 12px;
  }
</style>
