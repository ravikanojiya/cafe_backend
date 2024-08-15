require("dotenv").config();
module.exports = {
  checkRole: (req, res, next) => {
    if (res.locals.role == process.env.USER) res.sendStatus(401);
    else next();
  },
};
