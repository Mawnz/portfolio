<template>
  <div class = "content">
    <div class = "row header-row">
      <div class = "col-xs-12 col-6">
        Personal
      </div>
      <div class = "col-xs-12 col-6">
        Skills
      </div>
    </div>
    <div class = "row content-row">
      <div class = "col-xs-12 col-6">
        <ul><li v-for = "p in personal" :key="p">{{p}}</li></ul>
      </div>
      <div class = "col-xs-12 col-6">
        <ul><li v-for = "s in skills" :key="s">{{s}}</li></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      personal: [
        '25 years old', 'Cituated in Stockholm, Sweden', 'Studied Media Technology at KTH, Stockholm',
        'Professional trampoline athlete'
      ],
      skills: [
        'Javascript', 'AngularJS'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  padding: 10px;
  border-bottom-style: solid;
  width: 500px;
}
table {
  width: 100%;
}
div.header-row {
  font-size: 3em;
}
div.content-row {
  font-size: 2em;
}
tr.space-between{
  height: 50px;
}
</style>
