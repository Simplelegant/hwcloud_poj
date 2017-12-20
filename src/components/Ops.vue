<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h2>Simpleelegant</h2>
    <Card></Card>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Ops',
  components: {
    Card
  },
  data() {
    return {
      msg : 'ops'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: #42b983;
}
</style>
