let express = require("express");
let cors = require("cors");
let mongoClient = require("mongodb").MongoClient;
let app = express();

app.use(cors());

app.get("/", function(request, response) {
    let name = request.query.name;
    let mood = request.query.mood;
    response.send("Hello, " + name + "! I am " + mood + " too");
});

function performActions(collection, data, query) {
    console.log("Inserting...");
    collection.insert(data, function() {
        console.log("Inserted!");
    });
    console.log("Deleting...");
    collection.deleteMany(query);
}

mongoClient.connect("mongodb://localhost", function(err, client) {
    console.log(err);
    let sandbox = client.db("sandbox");
    let humans = sandbox.collection("humans");

    performActions(humans, {name: "Andrew", age: 24}, {name: "Andrew"});
    // app.listen(591);
});
