<template>
  <div class="hello">
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
      msg : '~我是有底线哒~'
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
