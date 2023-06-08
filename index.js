const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.status(500).send("hi");
  // res.send("Hello World!❤️");
  // res.json({ message: "Error" });
  res.render("index", { text: "tharwani" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

app.listen(3000);
