let express = require("express");
let multer = require("multer");
let mongoClient = require("mongodb").MongoClient;
let vjm = require("vue-jwt-mongo");
let connection;

let upload = multer({ dest: "../uploads" });

let SECRET = "66602D813FF8D5201D69071A75B74DB8F5D0A2E5D984172C627D5F95F3EFA59B";

let app = express();
app.use(express.static("../client"));

let vjmServer = vjm.Server({
    mongoUrl: "mongodb://localhost/photofeed",
    jwtSecret: SECRET
});

app.post("/auth/register", vjmServer.registerHandler);
app.post("/auth/login", vjmServer.loginHandler);
app.post("/upload", [vjmServer.jwtProtector, upload.single("image")], function(request, response) {
    let collection = connection.db("photofeed").collection("uploads");
    collection.insert({
        user: request.user.username,
        image: request.file.filename,
        date: new Date()
    });
    response.sendStatus(200);
});

mongoClient.connect("mongodb://localhost", function(err, client) {
    connection = client;
    app.listen(80);
});
