const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "all users" });
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json({ msg: "requested id: " + id });
});
router.post("/", (req, res) => {
  res.json(req.body);
});
router.patch("/:id", (req, res) => {
  let id = req.params.id;
  res.json({ msg: "edit id: " + id });
});
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    res.json({ msg: "delete id: " + id });
  });

module.exports = router;
