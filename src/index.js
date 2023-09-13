const express = require("express");

const connect = require("./config/database");

const TweetRepository = require("./repository/tweet-repository");

const app = express();

app.listen(3000, async () => {
    console.log("Server started");

    try {
        await connect();
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }

    // const tweet = await Tweet.create({
    //     content: "this is tweet 2",
    //     userEmail: "arvind@a.com",
    // });
    // console.log(tweet);
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({
        content: "this is tweet 11",
        userEmail: "a@book.com",
    });
    tweet.comments.push({ content: "first comment" });
    await tweet.save();
    // const tweet = await tweetRepo.getAll(2, 4);
    // console.log(tweet[0].ContentWithEmail);
});
