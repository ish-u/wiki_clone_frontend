<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand><router-link tag="span" :style="{ cursor: 'pointer'}" to="/">wiki</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link tag="span" :style="{ cursor: 'pointer'}" to="/create"><b-icon icon="pencil-square"></b-icon>Create</router-link>
        </b-nav-item>
        <b-nav-item href="#" disabled></b-nav-item>

        <b-nav-form @submit.prevent="search">
          <b-form-input size="sm" class="mr-sm-2" v-model="q" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"><b-icon icon="search"></b-icon></b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    data(){
      return{
        q: ''
      }
    },
    methods:{
      search(){
        this.$router.push({name: 'search', params: { query: this.q }})
        this.q = '';
      }
    }
}
</script>