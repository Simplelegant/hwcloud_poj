<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from '@/components/UserList'
export default {
  name: 'UserCenter',
  components:{
    UserList
  },
  data () {
    return {
      msg: '用户中心啦~'
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
