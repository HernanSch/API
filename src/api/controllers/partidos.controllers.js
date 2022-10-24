const Parties = require("../models/partidos.models");

const getAllParties = async (req,res)=> {
    try {
        const allParties = await Parties.find().populate("presidentes");
        return res.status(200).json(allParties);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewParties = async (req,res)=> {
    try{
        const {name, logo, established, presidentes} = req.body
        const newParty = new Parties({name, logo, established, presidentes});
        const createdParty = await newParty.save();
        return res.status(201).json(createdParty);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putParties = async (req,res)=> {
    try{
    const{id} = req.params;
    const putParties = new Parties(req.body);
    putParties._id = id;

    const partiesDb = await Parties.findByIdAndUpdate(id, putParties, {new: true});
    if(partiesDb){
        return res.status(404).json({"message": "Party not found"});
    }
    return res.status(200).json(partiesDb);
} catch (error){
    return res.status(500).json(error)
}
};

const deleteParties = async (req,res)=> {
    try{
        const{id} = req.params;
        const partiesDb = await Parties.findByIdAndDelete(id);
        if(!partiesDb){
            return res.status(404).json({"message": "Party not found"});
        }
        return res.status(200).json(partiesDb);
    } catch (error){
        return res.status(500).json(error)
    }
    };


module.exports = {getAllParties, postNewParties, putParties, deleteParties};