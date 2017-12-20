<template>
  <div class="traveldetail">
    <p>Travel</p>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  name: 'traveldetail',
  data () {
    return {
    	id : ''
    }
  },
  mounted(){
      this.id = this.$route.params.id;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>