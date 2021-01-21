<template>
  <div id="home" class="container p-5" style="text-align: center">
    <div v-if="notLoading">
      <hr />
      <b-container>
        <b-row style="justify-content: center">
          <b-col class="box" v-for="page in pages" :key="page.id" cols="3">
            <router-link
              tag="span"
              :style="{ cursor: 'pointer' }"
              :to="{ name: 'wiki', params: { pageID: page._id } }"
              ><b>{{ page.title | capitalize }}</b></router-link
            >
          </b-col>
        </b-row>
      </b-container>
      <hr />
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
  data() {
    return {
      pages: [],
      q: "",
      notLoading:false
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "search", params: { query: this.q } });
      this.q = "";
    },
  },
  created: function () {
    fetch(process.env.VUE_APP_WIKI_API , {
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
};
</script>

<style scoped>
.box {
  padding: 2.5%;
  margin: 2.5%;
  border: 2px black solid;
  border-radius: 10px;
  font-size: 25px;
  height: 100px;
  transition: 0.2s;
}
.box:hover {
  color: white;
  background-color: black;
  font-size: 27.5px;
}
</style>