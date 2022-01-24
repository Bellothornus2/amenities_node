var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser').json();

var AmenityController = require ('../controllers/AmenityController');

router.use(function (req,res,next){
    console.log(req.url);
    console.log(req.params);
    next();
})

router.get('/factory/:name/:price/:contentName/:contentDescription/:cupon/:parking',AmenityController.amenityAPI.factory);
router.get('/getAmenityByName/:name',AmenityController.amenityAPI.getAmenityByName);
router.get('/getAmenityById/:code',AmenityController.amenityAPI.getAmenityById);
router.get('/getAmenityAll',AmenityController.amenityAPI.getAmenityAll);
router.post('/getAmenityByIdAndUpdate/:code',bodyParser, AmenityController.amenityAPI.getAmenityByIdAndUpdate);
router.delete('/getAmenityByIdAndDelete/:code',bodyParser, AmenityController.amenityAPI.getAmenityByIdAndDelete);
router.get('/BlackFriday',AmenityController.amenityAPI.BlackFriday);
router.get('/BlackFridayOff',AmenityController.amenityAPI.BlackFridayOff);
module.exports = router;