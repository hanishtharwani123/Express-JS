const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.set("view engine", "ejs");
// app.use(logger);

// app.get("/", logger, logger, (req, res) => {
// res.status(500).send("hi");
// res.send("Hello World!❤️");
// res.json({ message: "Error" });
//   res.render("index1", { text: "tharwani" });
// });

const userRouter = require("./routes/users");
app.use("/users", userRouter);

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

app.listen(3000);
