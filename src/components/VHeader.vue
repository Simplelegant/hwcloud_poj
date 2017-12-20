<template>
  <div class="header">
    <mu-paper style="max-width: 376px; ">
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="movies" title="足迹动态" icon="ondemand_video" to="/"/>
        <mu-bottom-nav-item value="pictures" title="活跃地图" icon="map" to="/activemap"/>
        <mu-bottom-nav-item value="music" title="个人中心" icon="music_note" to="/usercenter"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'VHeader',
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange(val){
      this.bottomNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
