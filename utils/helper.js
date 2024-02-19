const fMsg = (res, msg = "success", result = []) => {
  res.status(200).json({
    con: true,
    msg,
    result,
  });
};
module.exports = { fMsg };
