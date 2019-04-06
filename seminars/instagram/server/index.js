let express = require("express");
let vjm = require("vue-jwt-mongo");

let SECRET = "66602D813FF8D5201D69071A75B74DB8F5D0A2E5D984172C627D5F95F3EFA59B";

let app = express();
app.use(express.static("../client"));

let vjmServer = vjm.Server({
    mongoUrl: "mongodb://localhost/photofeed",
    jwtSecret: SECRET
});

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);

app.listen(80);
