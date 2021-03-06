const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;
const API_SERVICE_URL = "https://www.metaweather.com/api";

app.use(
  cors({
    origin: "*",
  })
);

app.get("/meta-weather/*", async (req, res, next) => {
  try {
    const query = new URLSearchParams(req.query);
    const url = `${API_SERVICE_URL}${req.path.replace(
      "/meta-weather",
      ""
    )}?${query}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.log("error", err);
  return res.status(500).json({
    message: err.message || "Oops! Unknown error",
  });
});

app.use(express.static(path.join(__dirname, "/client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Starting proxy at ${PORT}`);
});
