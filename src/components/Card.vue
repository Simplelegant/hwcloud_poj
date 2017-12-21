<template>
  <div class="card">
    <mu-card v-for="item in newsList"
      :key="item.key">
      <router-link :to="{name: 'traveldetail', params: {id: item.id}}">
      <mu-card-media :title="item.title">
        <img :src="item.src" />
      </mu-card-media>
      <mu-card-title :title="item.text" :subTitle="sed"/>
      </router-link>
    </mu-card>
  </div>
</template>

<script>
import axios from 'axios';
const HOST = 'http://localhost:8085/seller';
export default {
  name: 'Card',
  data () {
    return {
      newsList: [
        {id : 0, title: '重庆', text: '洪洞崖呀那么美', src: '/static/chongqing.jpg'},
        {id : 1, title: '都江堰', text: '拜水都江堰', src: '/static/dujiangyan.jpg'},
        {id : 2, title: '成都', text: 'IFS和大熊猫', src: '/static/chengdu.jpg'}
      ],
      sed: ''
    }
  },
  mounted(){
    axios.get(HOST)
      .then(response => {
        this.sed = response.data.data;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>