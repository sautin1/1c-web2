<template>
    <div class="navbar navbar-expand sticky-top navbar-light bg-light">
        <router-link class="navbar-brand" to="feed">
            Фотолента
        </router-link>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to="/upload">
                    Загрузить
                </router-link>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link" v-on:click="logOut">
                    Выйти
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            logOut: function() {
                this.$auth.logOut();
                this.$router.push("/");
            }
        }
    };
</script>