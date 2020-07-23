console.log("jokes.routes.js");
const Jokes = require("../controllers/jokes.controller");

function middleWareFunction(req, res, next) {
    console.log(2, req.body);
    next();
}

module.exports = app => {
    app.get("/api/jokes", Jokes.allJokes);
    app.get("/api/jokes/:_id", Jokes.findJoke);
    app.post("/api/jokes", Jokes.createJoke);
    app.put("/api/jokes/:_id", Jokes.updateJoke);
    app.delete("/api/jokes/:_id", Jokes.remove);
    app.get("/api/jokes/random", Jokes.randomJoke);
}