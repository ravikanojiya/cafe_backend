const {
  signUp,
  login,
  forgotPassword,
  getAll,
  updateRole,
  checkToken,
  changePassword,
} = require("../users/controller");
const auth = require("./auth/authorization");
const checkRole = require("./auth/checkRole");
const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.get("/getAll", auth.authenticatToken, checkRole.checkRole, getAll);
router.patch("/update", auth.authenticatToken, checkRole.checkRole, updateRole);
router.get("/checktoken", auth.authenticatToken, checkToken);
router.post("/changePassword", auth.authenticatToken, changePassword);

module.exports = router;
