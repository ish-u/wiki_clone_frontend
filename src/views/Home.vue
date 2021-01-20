<template>
  <div class="container p-5">
    <h3>Pages</h3>
    <ul>
        <li v-for="page in pages" :key="page.id">
          <router-link tag="li" :style="{ cursor: 'pointer'}" :to="{name: 'wiki',params: {pageID: page._id }}">{{page.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [],
    };
  },
  mounted: function () {
    fetch("http://localhost:5000/wiki", {
      method: "get",
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.pages = jsonData;
      });
  },
};
</script>