const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const db_name ="jokes";

app.use(cors());
app.use(express.json());

//app.get("/", (req, res) => {
//  res.json({"message": "ok"});
//});
//app.get("api/joke", (req, res) => {
//  res.json({"message": "oh hai"});

//})
require("./server/config/mongoose")(db_name);
const jokeroutes = require("./server/routes/jokes.routes");
jokeroutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));