var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AmenitiesSchema = new Schema(
    {
        NamePack: String,
        PricePack: Number,
        ContentPack: [
            {
                name:String,
                description:String
            }
        ],
        HasCupon:Boolean,
        HasParking:Boolean
    }
)

AmenitiesSchema.pre(["find","findOne"],function(){
    this.select('_id NamePack PricePack ContentPack HasCupon HasParking');
})

module.exports = mongoose.model('Amenities',AmenitiesSchema)
/*
var Prueba = mongoose.model("Prueba",AmenitiesSchema);
var m = new Prueba;
m.ContentPack.push({"name":"hola","description":"descripcion"});
m.NamePack = "Esto es el nombre del Paquete"
etcétara
*/