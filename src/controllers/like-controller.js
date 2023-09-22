import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(
            req.params.modelId,
            req.param.modelType,
            req.body.userId
        );

        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully toggled like",
            error: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Unable to like tweet :(",
            data: {},
            err: { error },
        });
    }
};
