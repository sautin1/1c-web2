let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

app.get("/", function(request, response) {
    let name = request.query.name;
    let mood = request.query.mood;
    response.send("Hello, " + name + "! I am " + mood + " too");
});

app.listen(591);
