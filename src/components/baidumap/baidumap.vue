<template>
  <!--<baidu-map class="bm-view" :center="center" @ready="handler"></baidu-map>-->
  <baidu-map class="bm-view" :center="{lng: 117.261, lat: 31.871}" :zoom="15">
    <bm-marker :position="{lng: 117.261, lat: 31.871}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE" :label="{content: '艾益物联网科技', opts: {offset: {width: 20, height: -10}}}"></bm-marker>
  </baidu-map>
</template>
<script>
  export default {
    data () {
      return {
        center: {lng: 0, lat: 0}
      }
    },
    methods: {
      handler () {
        this.lng =  117.261
        this.lat = 31.871
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .bm-view
    width: 400px;
    height: 300px;
    margin: 50px auto;
</style>
