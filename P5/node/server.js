const express = require("express");
const app = express();
const path = require("path");

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(express.static(path.join(__dirname)));

const port = 3000;
app.listen(port, function() {
  console.log(`Server running on http://localhost:${port}`);
});
