const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/delete/:id', customerController.dalete);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);

module.exports = router;
