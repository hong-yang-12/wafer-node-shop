const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "all posts" });
});
router.post("/", (req, res) => {
  res.json(req.body);
});

router
  .route("/:id")
  .get((req, res) => {
    let id = req.params.id;
    res.json({ msg: "requested id: " + id });
  })
  .patch((req, res) => {
    let id = req.params.id;
    res.json({ msg: "edit id: " + id });
  })
  .delete((req, res) => {
    let id = req.params.id;
    res.json({ msg: "delete id: " + id });
  });

// router.get("/:id", (req, res) => {
//   let id = req.params.id;
//   res.json({ msg: "requested id: " + id });
// });

// router.patch("/:id", (req, res) => {
//   let id = req.params.id;
//   res.json({ msg: "edit id: " + id });
// });
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.json({ msg: "delete id: " + id });
});

module.exports = router;
