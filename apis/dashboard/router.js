const { cateCount ,productCount} = require("../dashboard/controller");
const router = require("express").Router();
const auth = require("../users/auth/authorization");
const checkRole = require("../users/auth/checkRole");

router.get("/cateCount",auth.authenticatToken,cateCount)
router.get("/productCount",auth.authenticatToken,productCount)
module.exports=router
