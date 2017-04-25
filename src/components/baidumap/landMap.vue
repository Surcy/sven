<template>
  <div class="wrapper-map">
    <baidu-map class="bm-view" :center="{lng: 118.165, lat: 30.072}" :zoom="15">
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"/>
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"/>
      <bm-label content="地块" :position="{lng: 118.165, lat: 30.072}" :labelStyle="{color: 'red', fontSize : '24px'}" title="地块1"/>
    </baidu-map>
  </div>
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
  .wrapper-map
    .bm-view
      width: 1000px;
      height: 550px;
      margin auto
</style>
