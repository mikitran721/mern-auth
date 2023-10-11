import jwt from "jsonwebtoken";
import { errorHandle } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  //   if (!token) return res.status(401).json("You need to Login");
  if (!token) return next(errorHandle(401, "You need to Login."));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // if (err) return res.status(403).json("Token is not valid");
    if (err) return next(errorHandle(403, "Token is not valid"));

    req.user = user;
    next();
  });
};
