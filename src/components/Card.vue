<template>
  <div class="card">
    <mu-card v-for="item in newsList"
      :key="item.key">
      <mu-card-media :title="item.title">
        <img :src="item.src" />
      </mu-card-media>
      <mu-card-title :title="item.text" subTitle="Content Title"/>
    </mu-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      newsList: [
        {id : 0, title: '重庆', text: '洪洞崖呀那么美', src: 'src/assets/chongqing.jpg'},
        {id : 1, title: '都江堰', text: '拜水都江堰', src: 'src/assets/dujiangyan.jpg'},
        {id : 2, title: '成都', text: 'IFS和大熊猫', src: 'src/assets/chengdu.jpg'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>