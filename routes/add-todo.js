var express = require("express");
var router = express.Router();
var app = express();

/* GET home page. */
router.get("/add-todo", function (req, res, next) {
  res.render("add-todo", { title: "Express" });
});
app.get("/add-todo", function (req, res) {
  res.render("add-todo");
});

module.exports = router;
module.exports = app;
