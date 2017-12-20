<template>
  <mu-card>
    <mu-card-header title="Myron Avatar" subTitle="sub title">
      <mu-avatar src="../assets/uicon.jpg" slot="avatar"/>
    </mu-card-header>
    <mu-card-media title="bbb" subTitle="Image Sub Title">
      <img src="../assets/sun.jpg" />
    </mu-card-media>
    <mu-card-title title="Content Title" subTitle="Content Title"/>
    <mu-card-text>
      {{todo.text}}
    </mu-card-text>
    <mu-card-actions>
      <mu-flat-button label="Action 1"/>
      <mu-flat-button label="Action 2"/>
    </mu-card-actions>
  </mu-card>
</template>

<script>
export default {
  name: 'Card',
  porps: ['todo'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>