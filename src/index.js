const express = require("express");

const connect = require("./config/database");
const { HashtagRepository } = require("./repository/index");
const TweetService = require("./services/tweet-service");

const app = express();

app.listen(3000, async () => {
    console.log("Server started");

    try {
        await connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    let repo = new HashtagRepository();
    let service = new TweetService();
    // const tweet = await service.createTweet({
    //     content: "this is #nodejs  n1ew",
    // });
    console.log(tweet);
    // const tag = await repo.findByName(["Frontend", "Dev"]);
    // console.log(tag);

    // await repo.bulkCreate([
    //     {
    //         title: "dev",
    //         tweets: [],
    //     },
    //     {
    //         title: "nodejs",
    //         tweets: [],
    //     },
    //     {
    //         title: "frontend",
    //         tweets: [],
    //     },
    // ]);
});
