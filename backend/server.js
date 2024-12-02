const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const empRoutes = require('./routes/employees');
const userValidators = require('./validators/users');
const empValidators = require('./validators/employees');

/*
    Required env variables: DB_CONNECTION_STRING
    Non-essential: PORT
 */
dotenv.config();

let SERVER_PORT = process.env.PORT;
if(!SERVER_PORT)
    SERVER_PORT = 3002;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose.connect(DB_CONNECTION_STRING).then(() => {
    console.log("Connected to mongodb")
}).catch((error) => {
    console.log("Error: ", error)
});

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1", userValidators);
app.use("/api/v1", empValidators);

app.use("/api/v1", userRoutes);
app.use("/api/v1", empRoutes);



app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
});