const express = require("express");
const router = express.Router();
const controller = require("./../Controllers/mainController");

router.route("/practice").get(controller.getWords)
router.route("/rank").post(controller.getRank)

module.exports = router