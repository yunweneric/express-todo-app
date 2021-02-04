var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var data = [
  {
    title: "Play 7-3-6 on Piano",
    description: "This is a short description of my todo",
    status: false,
  },
  {
    title: "Learn to cook Eru",
    description: "Make sure you don't add much pepper and salt in your first try",
    status: false,
  },
  {
    title: "Study you daily book and Bible verse",
    description: "Make sure you meditate and write down your thoughts",
    status: false,
  },
  
];
var posts = [
  {title: "Post 1", name: "Danny"},
  {title: "Post 2", name: "Alex"},
  {title: "Post 3", name: "Matt"},
  {title: "Post 4", name: "Manny"}
  ];

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/add-todo", function (req, res) {
  res.render("add-todo");
});
router.get("/todo-list", function (req, res) {
  res.render("todo-list", {todos: data, posts:posts});
});
router.get("/more", function (req, res) {
  res.render("more");
});
// router.post("/success", function (req, res) {
  // res.render("success", { title: "Express" });
  
// });

router.get("*", function (req, res) {
  res.render("erros");
});
module.exports = router;
