let Vue = require("vue");
let VueResource = require("vue-resource");
let VueRouter = require("vue-router");
let VueJwtMongo = require("vue-jwt-mongo");

let App = require("./components/app.vue");
let Register = require("./components/register.vue");
let Login = require("./components/login.vue");
let Index = require("./components/index.vue");
let Feed = require("./components/feed.vue");
let Upload = require("./components/upload.vue");

Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        { path: "/", component: Index },
        { path: "/register", component: Register },
        { path: "/login", component: Login },
        { path: "/feed", component: Feed },
        { path: "/upload", component: Upload }
    ]
});

let vm = new Vue({
    el: "#root",
    router: router,
    render: function(createElement) {
        return createElement(App);
    }
});
