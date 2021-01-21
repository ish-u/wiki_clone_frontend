<template>
  <div class="container p-3">
    <div v-if="notLoading">
      <h1>{{ page.title | capitalize }}</h1>
      <hr />
      <p v-html="toHTML(page.content)"></p>
    </div>
    <div v-else>
      <div class="text-center container p-5">
        <b-spinner style="height:50px; width:50px" label="Loading..."></b-spinner>
      </div>
    </div>
  </div>
</template>


<script>
import _ from "showdown";
export default {
  props: {
    pageID: String,
  },
  data() {
    return {
      page: {},
      notLoading: false,
    };
  },
  methods: {
    toHTML: function (text) {
      const c = new _.Converter();
      return c.makeHtml(text);
    },
  },
  created: function () {
    fetch(`${process.env.VUE_APP_WIKI_API}${this.pageID}`, {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.page = jsonData[0];
        this.notLoading = true;
      });
  },
};
</script>