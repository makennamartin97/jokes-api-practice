const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "This is how we validate"],
        minlength: [3, "Setup has to be more than 2 characters"]
    },
    punchline: String
    
}, {timestamps: true});
//var we use to communicate w db
const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;