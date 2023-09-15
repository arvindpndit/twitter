import express from "express";

import connect from "./config/database.js";

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
