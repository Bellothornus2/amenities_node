const Amenities = require("../models/amenities")
const importaAmenity = require("../domain/amenities")
const mongoLib = require('mongodb');

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

    const getAmenityByName = ( (req,res,next) => {
        Amenities.findOne({"NamePack":`${req.params.name}`})
        .exec(function(err, nameAmenity){
            if (err) {return next(err);}
            res.status(200).type('json').json(nameAmenity);
        })
    })

    const getAmenityById = ((req,res,next) => {
        var mongo_code = new mongoLib.ObjectId(req.params.code)
        //res.status(200).type('json').json(mongo_code)
        Amenities.findOne({_id:mongo_code})
        .exec(function(err,codeAmenity){
            if (err) {return next(err);}
            res.status(200).type('json').json(codeAmenity);
        })
    })

    const getAmenityAll = ((req,res,next) => {
        Amenities.find()
        .exec(function (err, amenities) {
            if (err) { return next(err); }
            res.status(200).type('json').json(amenities);
        })
    })

    const getAmenityByIdAndUpdate = ((req,res,next) => {
        var mongo_code = new mongoLib.ObjectId(req.params.code);
        var priceAmenity = req.body.price;
        var nameAmenity = req.body.name;
        var cuponAmenity = req.body.cupon;
        var parkingAmenity = req.body.parking;
        //si un campo no se encuentra no lo actualiza
        Amenities.findByIdAndUpdate({_id:mongo_code},
            {"$set":{PricePack:priceAmenity,
            NamePack:nameAmenity,
            HasCupon:cuponAmenity,
            HasParking:parkingAmenity}},
            function (err,codeAmenity) {
                if (err) {return next(err);}
                res.redirect('/amenity/getAmenityById/'+req.params.code);
            });
    })
    const getAmenityByIdAndDelete = ((req,res,next) => {
        var mongo_code = new mongoLib.ObjectId(req.params.code);
        Amenities.findByIdAndDelete({_id:mongo_code},
            function (err,codeAmenity){
                if (err) {return next(err);}
                res.send("Id: "+ mongo_code +" Succesfully Removed!")
            })
    })
    const BlackFriday = ((req,res,next) => {
        Amenities.find()
        .exec(function (err, amenities) {
            if (err) { return next(err); }
            amenities.forEach(reg => {
                Amenities.findByIdAndUpdate({_id:reg._id},
                    {"$set":{
                        PricePack:reg.PricePack/2,
                        NamePack:reg.NamePack + ' OFERTA!'
                    }
                },
                function (err,codeAmenity) {
                    if (err) {return next(err);}
                });
                reg.PricePack = reg.PricePack/2;
                reg.NamePack = reg.NamePack + ' OFERTA!';
            });
            res.status(200).type('json').json(amenities);
        //Amenities.updateMany({},{"$set":{"PricePack":{"$divide":["$PricePack",2]}},"NamePack":"$NamePack"+" OFERTA!"})
        })
    }) 

    const BlackFridayOff = ((req,res,next) => {
        Amenities.find()
        .exec(function (err,amenities) {
            if (err) {return next(err);}
            amenities.forEach(reg =>{
                var nameLength = reg.NamePack.length
                Amenities.findByIdAndUpdate({
                    _id:reg._id
                },{
                    "$set":{
                        PricePack:reg.PricePack*2,
                        NamePack:reg.NamePack.slice(0,nameLength-8)
                    }
                },
                function (err,codeAmenity) {
                    if (err) {return next(err);}
                });
                reg.PricePack = reg.PricePack*2;
                reg.NamePack = reg.NamePack.slice(0,nameLength-8);
            })
            res.status(200).type('json').json(amenities);
        })
    })
    return{
        factory,
        getAmenityByName,
        getAmenityById,
        getAmenityAll,
        getAmenityByIdAndUpdate,
        getAmenityByIdAndDelete,
        BlackFriday,
        BlackFridayOff
    };
})();

exports.amenityAPI = AmenityAPI;