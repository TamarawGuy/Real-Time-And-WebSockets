import express from "express";
import bodyParser from "body-parser";
import nanobuffer from "nanobuffer";
import morgan from "morgan";

// setup limited array
const msg = new nanobuffer(50);

// reverse to get the latest added messages
const getMsgs = () => Array.from(msg).reverse();

// add one msg
msg.push({ user: "Shiki", text: "hi", date: Date.now() });

// get express ready to run
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static("frontend"));

// get all messages
app.get("/poll", function (req, res) {
  res.json({ msg: getMsgs() });
});

// post new message
app.post("/poll", function (req, res) {
  const { user, text } = req.body;
  msg.push({ user, text, date: Date.now() });
  res.json({ status: "ok" });
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
