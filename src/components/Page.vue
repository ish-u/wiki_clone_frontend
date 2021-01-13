<template>

    <div class="container">
        <h1>{{page.title}}</h1>
        <hr>
        <p v-html="toHTML(page.content)"></p>
    </div>
</template>


<script>

export default {
    props:{
        page: Object,
        toHTML: Function
    }
}
</script>