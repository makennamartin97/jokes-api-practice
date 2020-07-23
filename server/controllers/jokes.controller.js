const Joke = require("../models/joke.model");

class JokeController {
    allJokes(req,res){
        Joke.find({})
            .then(alldajokes => res.json(alldajokes))
            .catch(err => res.json(err));
    }
    createJoke(req,res){
        const newjoke = new Joke(req.body);
        newjoke.save()
            .then(() => res.json(newjoke))
            .catch(err => res.json(err));
    }
    findJoke(req,res){
        Joke.findOne({_id: req.params._id})
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err));
    }
    updateJoke(req,res){
        Joke.findByIdAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
            .then(() => res.json({msg: "updated"}))
            .catch(err => res.json({ err}))
    }
    remove(req,res){
        Joke.findOneAndRemove({_id: req.params._id})
            .then(() => res.json({msg: "ok"}))
            .catch(err => res.json({ err}))

    }
    randomJoke(req,res){
        Joke.find()
            .then(randjoke => {
                var r = Math.floor(Math.random() * randjoke.length);
                console.log(randjoke);
                res.json({joke: randjoke[r]})
            })
            .catch(err => res.json({ msg: "Something went wrong", error: err }))
    }
}



module.exports = new JokeController();