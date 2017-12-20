<template>
<a>
  <mu-list>
    <mu-list-item title="Sent mail">
      <mu-icon slot="left" value="send"/>
    </mu-list-item>
    <mu-list-item title="Drafts">
      <mu-icon slot="left" value="drafts"/>
    </mu-list-item>
    <mu-list-item title="Inbox" toggleNested>
      <mu-icon slot="left" value="inbox"/>
      <mu-list-item slot="nested" title="Starred">
        <mu-icon slot="left" value="grade"/>
      </mu-list-item>
      <mu-list-item slot="nested" disabled title="Sent mail" toggleNested>
        <mu-icon slot="left" value="send"/>
        <mu-list-item title="Drafts" slot="nested">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>
      </mu-list-item>
      <mu-list-item slot="nested" title="Inbox" toggleNested>
        <mu-icon slot="left" value="inbox"/>
        <mu-list-item title="Drafts" slot="nested">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>
      </mu-list-item>
    </mu-list-item>
  </mu-list>
</a>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: #42b983;
}
</style>
