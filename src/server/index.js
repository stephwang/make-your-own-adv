const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) => {
  console.log("Getting username");
  res.send({ username: os.userInfo().username })
});

app.listen(port, () => console.log(`Listening on port ${port}`));