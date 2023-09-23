import CommentRepository from "../repository/comment-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class CommentService {
    constructor() {
        this.commentRepo = new CommentRepository();
        this.tweetRepo = new TweetRepository();
    }

    async create(modelId, modelType, userId, content) {
        let commentable;

        if (modelType === "Tweet") {
            commentable = await this.tweetRepo.find(modelId);
        } else if (modelType === "Comment") {
            commentable = await this.commentRepo.get(modelId);
        } else {
            console.log("Unknown type found");
            return null;
        }

        if (commentable === null) {
            console.log("Commentable not found");
            return null;
        }

        const newComment = {
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: [],
        };

        const comment = await this.commentRepo.create(newComment);

        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}

export default CommentService;
