import passport from "passport ";

export const authentication = (req, res, next) => {
    passport.authentication("jwt", (err, user, data) => {
        if (err) next(err);
        if (!user) {
            return res.status(401).json({
                message: "Unauthorised access",
            });
        }
        req.user = user;
        next();
    })(req, res, next);
};
