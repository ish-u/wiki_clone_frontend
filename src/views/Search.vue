<template>
  <div class="container p-5">
    <div v-if="notLoading">
      <h2>Search : {{ query }}</h2>
      <hr />
      <ul>
        <li v-for="page in pages" :key="page.id">
          <router-link
            tag="li"
            :style="{ cursor: 'pointer' }"
            :to="{ name: 'wiki', params: { pageID: page._id } }"
            ><h4>{{ page.title | capitalize }}</h4></router-link
          >
        </li>
      </ul>
    </div>
    <div v-else>
      <div class="text-center container p-5">
        <b-spinner
          style="height: 50px; width: 50px"
          label="Loading..."
        ></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    query: String,
  },
  data() {
    return {
      pages: [],
      notLoading: false
    };
  },
  methods: {
    getPages() {
      fetch(`${process.env.VUE_APP_WIKI_API}search/${this.query}`, {
        method: "get",
      })
        .then((response) => {
          return response.json();
        })
        .then((jsonData) => {
          this.pages = jsonData;
          this.notLoading = true;
        });
    },
  },
  mounted: function () {
    this.getPages();
  },
  watch: {
    $route(to) {
      this.query = to.params.query;
      this.getPages();
    },
  },
};
</script>