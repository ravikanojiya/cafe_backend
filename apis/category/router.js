const { add, view, update } = require("../category/controller");
const router = require("express").Router();
const auth = require("../users/auth/authorization");
const checkRole = require("../users/auth/checkRole");

router.post("/add", auth.authenticatToken, checkRole.checkRole, add);
router.get("/view", auth.authenticatToken, checkRole.checkRole, view);
router.patch("/update", auth.authenticatToken, checkRole.checkRole, update);

module.exports = router;
