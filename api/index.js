import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

const app = express();

app.listen(3300, () => {
  console.log("Server listening on port 3300");
});
