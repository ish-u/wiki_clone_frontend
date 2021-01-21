<template>
  <div id="app">
    <div id="nav">
      <Header></Header>  
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>



