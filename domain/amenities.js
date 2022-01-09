//const amenities = require("../models/amenities");

function Amenity(){
    this.NamePack = "pack de Prueba";
    this.PricePack = 5;
    this.ContentPack = [
        {
            "name":"contenido de prueba",
            "description":"descripcion de prueba"
        }
    ];
    this.HasCupon = false;
    this.HasParking = false;
}

Amenity.prototype.GetPrice = function(){
    return this.PricePack;
}

Amenity.prototype.GetName = function(){
    return this.NamePack;
}

Amenity.prototype.GetContent = function(){
    return this.ContentPack;
}
Amenity.prototype.GetContentByIndex = function(index){
    return this.ContentPack[index];
}
Amenity.prototype.GetCupon = function(){
    return this.HasCupon;
}

Amenity.prototype.GetParking = function(){
    return this.HasParking;
}

Amenity.prototype.ChangePrice = function(new_price){
    this.PricePack = new_price;
}

Amenity.prototype.ChangeName = function(new_name){
    this.NamePack = new_name;
}

Amenity.prototype.AppendContent = function(new_content){
    this.ContentPack.push(new_content);
}

Amenity.prototype.DeleteContentByIndex = function(index_to_remove){
    this.ContentPack.splice(index_to_remove,1);
}

Amenity.prototype.DeleteContent = function(){
    this.ContentPack = [];
}

Amenity.prototype.ActivateCupon = function(){
    this.HasCupon = true;
}

Amenity.prototype.DeactivateCupon = function(){
    this.HasCupon = false;
}

Amenity.prototype.ActivateParking = function(){
    this.HasParking = true;
}

Amenity.prototype.DeactivateParking = function(){
    this.HasParking = false;
}

var factory = (function singleAmenitie(){
    const amenityInstance = new Amenity();
    return {
        getAmenity :function getAmenity(){
            return amenityInstance;
        }
    }
})();

exports.singletonAmenity = factory;