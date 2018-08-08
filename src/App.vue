<template>
  <div id="app">
    <div id = "main_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    let data = {
      a: '1'
    }
    return data
  }
}
</script>

<style lang = "scss">
$textColor: #7e7e7e;
body, html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
div#main_content{
  position: relative;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
  margin-top: 0;
  height: 100%;
  width: 100%;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 50px 50px;
}
.header {
  height: 70px;
}
.unselectable {
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
</style>
