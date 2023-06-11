const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});

router.get("/new", (req, res) => {
  res.send("new user");
});

router.get("/:id", (req, res) => {
  res.send(`Get User with ID ${req.params.id}`);
});

router.post("/", (req, res) => {
  res.send("Create users");
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
  .delete("/:id", (req, res) => {
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
