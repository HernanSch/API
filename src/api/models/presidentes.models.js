const mongoose = require("mongoose");

//Obtengo los schemas de mongoose
const Schema = mongoose.Schema;


const presidentesSchema = new Schema(
    {
        name: {type: String, required: true}, 
        image: {type: String, required: true},
        election: [{type:Number, required: true}] 
    },{
        timestamps: true
    }
)

// Movie --> modelo de moongose, movie seria el nombre de mi coleccion y son elementos del tipo movieSchema 
const Presidentes = mongoose.model("presidentes", presidentesSchema);

module.exports = Presidentes;