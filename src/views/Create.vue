<template>
    <div class="container p-3">
        <h1 style="text-align:center;">Create a new Page</h1>
        <br>
        <template>
            <div>
                <b-form @submit.prevent="onSubmit">
                    <b-alert
                    :show="dismissCountDown"
                    dismissible
                    variant="warning"
                    @dismissed="dismissCountDown=0"
                    >
                    <span>{{msg}}</span>
                    </b-alert>
                    <div>
                        <b-form-input type="text" placeholder="Title" v-model="title"></b-form-input>
                        <br>
                        <b-form-textarea
                        id="textarea"
                        v-model="text"
                        placeholder="Enter MARKUP"
                        rows="15"
                        ></b-form-textarea>
                    </div>
                    <br>
                    <b-button type="submit" variant="outline-dark"><b-icon icon="file-earmark"></b-icon> Create</b-button>
                </b-form>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return{
            text : '',
            title: '',
            dismissSecs: 5,
            dismissCountDown: 0,
            msg:''
        }
    },
    methods: {
        onSubmit(){
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ content: this.text ,title: this.title })
            };
            fetch(process.env.VUE_APP_WIKI_API, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.msg = data["msg"] == 'Page Saved' ? 'Page Added' : 'Page Not Added - Error'
                    this.dismissCountDown = this.dismissSecs
                });
            this.text = ''
            this.title = ''
        }
    }
}
</script>