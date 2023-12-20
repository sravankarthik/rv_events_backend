const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require("cookie-parser");
const cors = require("cors");

require('dotenv').config();

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/event");


app.use("/api", userRoutes);
app.use("/api", eventRoutes);

//DB connection
const port = 8000
mongoose.connect('mongodb+srv://test:test@cluster0.y7khmp3.mongodb.net/?retryWrites=true&w=majority')
    .then(() => { console.log("DB connected...") });
//Server connection
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})