const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

//Middlewares
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(cors());

const userRoutes = require("./routes/user");
const eventRoutes = require("./routes/event");


app.use("/api", userRoutes);
app.use("/api", eventRoutes);

//DB connection
const port = process.env.PORT || 8000
mongoose.connect(process.env.BACKEND)
    .then(() => { console.log("DB connected...") });
//Server connection
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})