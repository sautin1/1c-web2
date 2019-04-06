<template>
    <div class="page">
        <div class="focus">
            <form class="focus_holder" v-on:keydown.enter="login">
                <input type="text" class="form-control" placeholder="Логин" v-model="username">
                <input type="password" class="form-control" placeholder="Пароль" v-model="password">
                <button type="button" class="btn btn-primary btn-block" v-on:click="login">
                    Войти!
                </button>
                <router-link to="/register">Регистрация</router-link>
            </form>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            login: function() {
                let promise = this.$auth.logIn(this.username, this.password);
                promise.then(function() {
                    this.$router.push("/feed");
                });
                promise.catch(function(error) {
                    alert("Ошибка: " + error);
                });
            }
        }
    }
</script>