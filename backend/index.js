require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blog.routes')
app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://andrew:" + process.env.MONGO_PW + "@cluster0.ivklvrj.mongodb.net/test?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})


app.use('/', blogRoutes);

const PORT = 4000;

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});