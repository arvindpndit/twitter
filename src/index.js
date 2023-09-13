const express = require("express");

const connect = require("./config/database");

const app = express();

app.listen(3000, async () => {
    console.log("Server started");

    try {
        await connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
});
