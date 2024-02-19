const DB = require("../dbs/user");
const Helper = require("../utils/helper");

//using helper
const all = async (req, res) => {
  let users = await DB.find();
  Helper.fMsg(res, "All users", users);
};

// const all = async (req, res) => {
//   res.status(200).json({ con: true, msg: "all users", result: [] });
// };

//not using helper
// const all = async (req, res) => {
//   const users = await DB.find();
//   res.json({ res, msg: "all users", result: users });
// };
//not using db
// const all = async (req, res, next) => res.json({ msg: "all users" });
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
  drop,
};
