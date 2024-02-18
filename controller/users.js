const all = async (req, res, next) => res.json({ msg: "all users" });
const add = async (req, res, next) =>
  res.json({ msg: "post user", result: req.body });
const get = async (req, res, next) => res.json({ msg: "single user" });
const patch = async (req, res, next) =>
  res.json({ msg: "edit id: " + req.params.id });
const drop = async (req, res, next) =>
  res.json({ msg: "delete id: " + req.params.id });

module.exports = {
  all,
  add,
  get,
  patch,
  drop
};
