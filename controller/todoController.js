module.exports = (app) => {
  // console.log(app);
  let data = [
    {
      title: "Cook Eru on moday",
      desc: "Add enough pepper and red oil in it. Not much salt",
      status: "done",
    },
    {
      title: "Practice He turned it by tyler",
      desc: "Practice the diminished movements",
      status: "not done",
    },
  ];

  /* GET home page. */
  app.get("/", function (req, res) {
    res.render("index", { title: "Express" });
  });

  app.get("/todo-list", function (req, res) {
    res.render("todo-list");
  });

  app.get("/add-todo", function (req, res) {
    res.render("add-todo", { title: "Express" });
  });
  app.post("/success", function (req, res) {
    res.render("success", { title: "Express" });
    res.redirect(req.url);
  });

};
