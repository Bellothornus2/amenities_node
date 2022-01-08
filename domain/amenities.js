const amenities = require("../models/amenities");

function Amenities(){
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

Amenities.prototype.ChangePrice = function(new_price){
    this.PricePack = new_price;
}

Amenities.prototype.GetPrice = function(){
    return this.PricePack;
}

Amenities.prototype.GetName = function(){
    return this.NamePack;
}

Amenities.prototype.GetContent = function(){
    return this.ContentPack;
}

Amenities.prototype.GetCupon = function(){
    return this.HasCupon;
}

Amenities.prototype.GetParking = function(){
    return this.HasParking;
}