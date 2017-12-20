<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActiveMap',
  data () {
    return {
      msg: 'Active Map'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amap-box {
  width: 500px;
  height: 500px;
}
</style>
