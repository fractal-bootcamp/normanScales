import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("success");
});

app.get("/secret", (req, res) => {
  // TODO: protect this page so if the user is not logged in, they can't navigate.
  // check isAuthed(req)
  res.send("revealed");
});

app.listen(8080, () => {
  console.log(`app is listening on port 8080`);
});
//EOD PR
