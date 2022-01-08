const express = require('express')
var router = express.Router()

var get_controller = require('../controllers/getController')

router.get('/', get_controller.index);

module.exports = router;