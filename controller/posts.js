const all = async (req, res, next) => res.json({ msg: "all posts" });
const get = async (req, res, next) => res.json({ msg: "Single posts" });
const post = async (req, res, next) =>
  res.json({ msg: "post posts", result: req.body });
const patch = async (req, res, next) => res.json({ msg: "patch posts" });
const drop = async (req, res, next) => res.json({ msg: "delete posts" });

module.exports = { all, get, post, patch, drop };
