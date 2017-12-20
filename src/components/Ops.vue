<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h2>Simpleelegant</h2>
    <ul>
      <li
        is="Card"
        v-for="item in newsList"
        v-bind:todo="item"
        v-bind:key="item.id">
      </li>
    </ul>
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
      msg : 'ops',
      newsList: [
        {id : 0, title: 'dujiangyan', text: 'hhh'},
        {id : 1, title: 'a', text: 'b'}
      ]
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
