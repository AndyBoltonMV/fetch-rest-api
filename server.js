const express = require("express"); // Import Express
const cors = require("cors"); // Import Cors
const app = express(); // Create Express Web Server

app.use(cors()); // Allow Cross Origin Resource Sharing in our Server
app.use(express.json()); // Allow JSON data in Request/Response

// GET request returns object with "msg" k/v pair
app.get("/", (req, res) => {
  console.log("firing");
  res.send({ msg: "This is a GET request" });
});

// POST request returns object with "msg" k/v pair using body for input
app.post("/", (req, res) => {
  res.send({ msg: `This is a POST request with body: ${req.body.name}` });
});

// Listen on port 5001
app.listen(5001);
