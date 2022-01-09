const Amenities = require("../models/amenities")
const importaAmenity = require("../domain/amenities")

var AmenityAPI = (function singleController(){
    var amenity = importaAmenity.singletonAmenity.getAmenity();
    
    const factory = function(req,res,next){
        let contentName = req.params.contentName;
        let contentDescription = req.params.contentDescription;
        let amenityInstanceModel = new Amenities(
            {
                NamePack: `${req.params.name}`,
                PricePack: req.params.price,
                ContentPack: [{
                    "name":contentName,
                    "description":contentDescription
                }],
                HasCupon: req.params.cupon,
                HasParking: req.params.parking
            }
        );

        amenityInstanceModel.save(function (err){
            if (err) return handleError(err);
        });

        res.status(200).type('json').json(amenityInstanceModel);
    }

    const getAmenity = ( (req,res,next) => {
        Amenities.findOne({"NamePack":`${req.params.name}`})
        .exec(function(err, nameAmenity){
            if (err) {return next(err);}
            res.status(200).type('json').json(nameAmenity);
        })
    })

    return{
        factory,
        getAmenity
    };
})();

exports.amenityAPI = AmenityAPI;