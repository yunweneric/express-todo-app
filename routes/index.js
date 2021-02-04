var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/add-todo", function (req, res, next) {
  res.render("add-todo", { title: "Express" });
});
router.get("/todo-list", function (req, res, next) {
  res.render("todo-list", { title: "Express" });
});
router.get("/more", function (req, res, next) {
  res.render("more", { title: "Express" });
});
router.post("/success", function (req, res, next) {
  res.render("success", { title: "Express" });
});

router.get("*", function (req, res) {
  res.render("erros");
});
module.exports = router;
