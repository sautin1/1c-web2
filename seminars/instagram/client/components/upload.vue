<template>
    <div class="page">
        <navigation></navigation>
        <div class="focus">
            <div class="focus_holder">
                <div class="form_handler">
                    <img v-if="previewed" v-bind:src="image">
                    <form v-on:submit.prevent="upload">
                        <label class="btn btn-light">
                            Выбрать...
                            <input type="file" accept="image/*" name="image" v-on:change="preview">
                        </label>
                        <button type="submit" class="btn btn-light" v-bind:disabled="!previewed">
                            Загрузить!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                image: "",
                previewed: false
            }
        },
        methods: {
            preview: function(event) {
                let files = event.target.files;
                if (files.length > 0) {
                    let reader = new FileReader();
                    let self = this;
                    reader.onload = function(readerEvent) {
                        self.image = readerEvent.target.result;
                        self.previewed = true;
                    };
                    reader.readAsDataURL(files[0]);
                }
            },
            upload: function(event) {
                let data = new FormData(event.target);
                let promise = this.$http.post("/upload", data, { bearer: true });
                promise.then(function() {
                    this.$router.push("/feed");
                });
                promise.catch(function(error) {
                    alert("Ошибка: " + error);
                });
            }
        },
        components: {
            navigation: require("./navigation.vue")
        }
    };
</script>