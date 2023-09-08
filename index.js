const express = require("express");

const app = express();

app
  .get("/api", (req, res) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    try {
      let { slack_name, track } = req.query;
      if (!slack_name || !track)
        throw new Error("track name and slack name required");
      res.status(200).json({
        slack_name,
        current_day: days[new Date().getDay()],
        utc_time: new Date(),
        github_file_url:
          "https://github.com/solomonsolomonsolomon/tsk1/index.js",
        github_repo_url: "https://github.com/solomonsolomonsolomon/tsk1",
        status_code: 200,
      });
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        status: 400,
      });
    }
  })
  .listen(2500, () => {
    console.log("task 1 complete");
  });
