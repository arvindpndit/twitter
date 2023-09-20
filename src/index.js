import express from "express";
import bodyParser from "body-parser";

import connect from "./config/database.js";
import apiRoutes from "./routes/index.js";

import UserRepository from "./repository/user-repository.js";
import LikeService from "./services/like-service.js";
import TweetRepository from "./repository/tweet-repository.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
    console.log("Server started");

    try {
        await connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();

    const tweets = await tweetRepo.getAll(0, 10);
    console.log(tweets);

    const user = await userRepo.create({
        email: "arvind@admin.com",
        password: "12345678",
        name: "Arvind",
    });

    const likeService = new LikeService();
    likeService.toggleLike(tweets[0].id, "Tweet", user.id);
});
