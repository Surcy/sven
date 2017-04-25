<template>
  <div class="wrapper">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Check me out
    </label>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    <!-- Standard button -->
    <button type="button" class="btn btn-default">（默认样式）Default</button>

    <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
    <button type="button" class="btn btn-primary">（首选项）Primary</button>

    <!-- Indicates a successful or positive action -->
    <button type="button" class="btn btn-success">（成功）Success</button>

    <!-- Contextual button for informational alert messages -->
    <button type="button" class="btn btn-info">（一般信息）Info</button>

    <!-- Indicates caution should be taken with this action -->
    <button type="button" class="btn btn-warning">（警告）Warning</button>

    <!-- Indicates a dangerous or potentially negative action -->
    <button type="button" class="btn btn-danger">（危险）Danger</button>

    <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
    <button type="button" class="btn btn-link">（链接）Link</button>
    <table class="table">
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>结果</th>
        <th>历史1</th>
        <th>历史2</th>
        <th>参考值</th>
        <th>提示</th>
      </tr>
      <tr>
        <td>01</td>
        <td><img class="star" lt="star" title="star"/>白细胞计数</td>
        <td>2.4</td>
        <td>2.6</td>
        <td>2.8</td>
        <td>2.1-3.2  10^g/L</td>
        <td>web</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import '../../assets/js/bootstrap.min'
  export default {

  }
</script>
<style lang="stylus" scoped>
  @import '../../assets/css/bootstrap.min.css'
</style>
