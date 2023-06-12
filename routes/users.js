const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
});

router.post("/", (req, res) => {
  // console.log(req.body.firstName);
  // res.send("hi");

  const isValid = true;
  if (isValid) {
    users.push({ firstName: "req.body.firstName" });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete user with ID ${req.params.id}`);
  });

// router.get("/:id", (req, res) => {
//   res.send(`Get user with ID ${req.params.id}`);
// });

// router.put("/:id", (req, res) => {
//   res.send(`update user with ID ${req.params.id}`);
// });

// router.delete("/:id", (req, res) => {
//   res.send(`delete user with ID ${req.params.id}`);
// });

const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
