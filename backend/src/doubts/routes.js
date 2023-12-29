const { Router } = require("express")
const router = Router();
const controller = require('./controller');

router.get("/",controller.getDoubtsUser);
router.post('/',controller.addUser);
router.get("/:user_id",controller.getDoubtsUserById);
module.exports = router;