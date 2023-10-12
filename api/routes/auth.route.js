import express from "express";
import {
  signin,
  signup,
  google,
  signout,
} from "../controllers/auth.controller.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signout);

export default router;
