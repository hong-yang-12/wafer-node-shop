const router = require("express").Router();
const controller = require("../controller/users");

//using controller
router.get("/", controller.all);
router.post("/", controller.add);

router
  .route("/:id")
  .get(controller.get)
  .patch(controller.patch)
  .delete(controller.drop);

//using route & not using controller
// router
// .route("/:id")
// .get((req, res) => res.json({ msg: "requested id: " + req.params.id }))
// .patch((req, res) => res.json({ msg: "edit id: " + req.params.id }))
// .delete((req, res) => res.json({ msg: "delete id: " + req.params.id }));

//not using route
// router.get("/", (req, res) => {
//   res.json({ msg: "all users" });
// });
// router.post("/", (req, res) => {
//   res.json(req.body);
// });
// router.get("/:id", (req, res) => {
//   let id = req.params.id;
//   res.json({ msg: "requested id: " + id });
// });
// router.patch("/:id", (req, res) => {
//   let id = req.params.id;
//   res.json({ msg: "edit id: " + id });
// });
// router.delete("/:id", (req, res) => {
//   let id = req.params.id;
//   res.json({ msg: "delete id: " + id });
// });

module.exports = router;
