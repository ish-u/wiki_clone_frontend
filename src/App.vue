<template>
  <div id="app">
      <Header></Header>
      <Page :page="pages[0]" :toHTML="toHTML"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Page from './components/Page'
import _ from 'showdown'
export default {
  name: 'App',
  components: {
    Header,
    Page
  },
  data(){
    return {
      pages: []
    }
  },
  methods : {
      toHTML: function(text){
          const c = new _.Converter();
          return c.makeHtml(text);
      }
  },
  mounted : function() {
  fetch('http://localhost:5000/wiki', {
    method: 'get',
  })
    .then((response) => {
      return response.json()
    })
    .then((jsonData) => {
      this.pages = jsonData;
    })
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
