import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./api/router/user_router.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

// custom JSON handling for BigInt
app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = function (data) {
    const replacer = (key, value) => (typeof value === "bigint" ? value.toString() : value);
    return originalJson.call(this, JSON.parse(JSON.stringify(data, replacer)));
  };
  next();
});

// routes
app.use("/auth", authRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
