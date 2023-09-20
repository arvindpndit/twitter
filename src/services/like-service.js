import LikeRepository from "../repository/like-repository.js";
import TweetRepository from "../repository/tweet-repository.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {
        // -->  /api/v1/likes/toggles?modelId&type=Tweet
        if (modelType == "Tweet") {
            var likeable = await this.tweetRepository.find(modelId);
        } else if (modelType == "Comment") {
        } else {
            throw new Erorr("Unknown model type");
        }
        const exists = this.likeRepository.findByUserAndLikable({
            user: userId,
            onModel: modelType,
            likeable: modelId,
        });

        if (exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            //await exists.remove();
            var isRemoved = false;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId,
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved = true;
        }
        return isRemoved;
    }
}

export default LikeService;
