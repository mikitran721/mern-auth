import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandle } from "../utils/error.js";
import jwt from "jsonwebtoken";

// SIGN UP
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // res.status(500).json(error.message);
    // next(errorHandle(300, "something went wrong"));
    next(error);
  }
};

//SIGN IN
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    // su dung errorHandle de bao loi
    if (!validUser) return next(errorHandle(404, "User not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) return next(errorHandle(401, "Wrong credentials!"));

    // generate token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;

    // age: la thoi gian token co hieu luc tinh theo giay
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60, //1day
      })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
