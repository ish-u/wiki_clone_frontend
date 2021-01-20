<template>
    <div class="container">
        <h1>{{page.title}}</h1>
        <hr>
        <p v-html="toHTML(page.content)"></p>
    </div>
</template>


<script>
import _ from 'showdown'
export default {
    props:{
        pageID: String
    },
    data() {
        return{
            page : {}
        }
    },
    methods: {
        toHTML: function(text){
          const c = new _.Converter();
          return c.makeHtml(text);
      }
    },
    created : function() {
    fetch(`http://localhost:5000/wiki/${this.pageID}`, {
        method: 'get',
    })
        .then((response) => {
        return response.json()
        })
        .then((jsonData) => {
        this.page = jsonData[0];
        })
}
}
</script>