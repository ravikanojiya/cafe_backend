const {
  add,
  view,
  getById,
  update,
  deleteProduct,
  updateStatus,
} = require("../products/controller");
const router = require("express").Router();
const auth = require("../users/auth/authorization");
const checkRole = require("../users/auth/checkRole");
const ckeckRole = require("../users/auth/checkRole");

router.post("/add", auth.authenticatToken, ckeckRole.checkRole, add);
router.get("/view", auth.authenticatToken, checkRole.checkRole, view);
router.get("/getById/:id", auth.authenticatToken, checkRole.checkRole, getById);
router.patch("/update", auth.authenticatToken, checkRole.checkRole, update);
router.delete(
  "/delete/:id",
  auth.authenticatToken,
  checkRole.checkRole,
  deleteProduct
);
router.patch(
  "/updateStatus",
  auth.authenticatToken,
  checkRole.checkRole,
  updateStatus
);

module.exports = router;
