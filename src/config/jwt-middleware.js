import JWT from "passport-jwt";
import User from "../models/user.js";

const JwtStrategy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opt = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretKey: "secret",
};

export const passportAuth = (passport) => {
    passport.use(
        JwtStrategy(opt, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);

            if (!user) done(null, false);
            else done(null, user);
        })
    );
};
