import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("RPL-Lectant API is running 🚀");
});

export default router;
