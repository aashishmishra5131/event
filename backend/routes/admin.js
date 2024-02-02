const router = require('express').Router();
const admin = require("../controller/adminController")

router.post("/register",admin.register)
router.post("/login",admin.login)
router.post("/product",admin.addProduct)
router.post("/edit/:productId",admin.editProduct)
router.get("/getPro/:productId",admin.editProduct)
router.get("/getallPro",admin.getAllProduct)
router.get("/getUser",admin.getUser)

module.exports = router;
