<template>
  <div id="app">
    <router-view/>
    <VHeader></VHeader>
  </div>
</template>

<script>
  import VHeader from '@/components/VHeader'

  export default {
    name: 'app',
    components: {
      VHeader
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
