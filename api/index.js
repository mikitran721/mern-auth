import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import path from "path";

//using dotenv
dotenv.config();

// ket noi csdl
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Loi ket noi MongoDB: ", err);
  });

const __dirname = path.resolve();
const app = express();

// for deployment
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(express.json());

app.use(cookieParser()); //cai nay de su dung cookie-token

app.listen(3300, () => {
  console.log("Server listening on port 3300");
});

// api route
/* app.get("/", (req, res) => {
  res.json({
    message: "Hello from HCMC; Api is working",
  });
}); */

//user route
app.use("/api/user", userRoutes);

//auth route
app.use("/api/auth", authRoutes);

// handle error - su dung next(error) trong controller
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode: statusCode,
  });
});
