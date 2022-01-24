var express = require('express');
var router = express.Router();

var AmenityController = require ('../controllers/AmenityController');

router.use(function (req,res,next){
    console.log(req.url);
    console.log(req.params);
    next();
})

router.get('/factory/:name/:price/:contentName/:contentDescription/:cupon/:parking',AmenityController.amenityAPI.factory);
router.get('/getAmenityByName/:name',AmenityController.amenityAPI.getAmenityByName);
router.get('/getAmenityById/:code',AmenityController.amenityAPI.getAmenityById);
module.exports = router;