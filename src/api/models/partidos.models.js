const mongoose = require("mongoose");

//Obtengo los schemas de mongoose
const Schema = mongoose.Schema;


const partidosSchema = new Schema(
    {
        name: {type: String, required: true}, 
        logo: {type: String, required: true},
        established: {type: Number, required: true},
        presidentes: [{type: Schema.Types.ObjectId, ref: "presidentes"}] //relaciono
    },{
        timestamps: true
    }
)

// Movie --> modelo de moongose, movie seria el nombre de mi coleccion y son elementos del tipo movieSchema 
const Partidos = mongoose.model("partidos", partidosSchema);

module.exports = Partidos;