const Presidents = require("../models/presidentes.models");

const getAllPresidents = async (req,res)=> {
    try {
        const allPresidents = await Presidents.find();
        return res.status(200).json(allPresidents);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const postNewPresidents = async (req,res)=> {
    try{
        const {name, image, election} = req.body
        const newPresident = new Presidents({name, image, election});
        const createdPresident = await newPresident.save();
        return res.status(201).json(createdPresident);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const putPresidents = async (req,res)=> {
    try{
    const{id} = req.params;
    const putPresidents = new Presidents(req.body);
    putPresidents._id = id;

    const presidentsDb = await Presidents.findByIdAndUpdate(id, putpresidents, {new: true});
    if(presidentsDb){
        return res.status(404).json({"message": "President not found"});
    }
    return res.status(200).json(presidentsDb);
} catch (error){
    return res.status(500).json(error)
}
};

const deletePresidents = async (req,res)=> {
    try{
        const{id} = req.params;
        const presidentsDb = await Presidents.findByIdAndDelete(id);
        if(!presidentsDb){
            return res.status(404).json({"message": "President not found"});
        }
        return res.status(200).json(presidentsDb);
    } catch (error){
        return res.status(500).json(error)
    }
    };
module.exports = {getAllPresidents, postNewPresidents, putPresidents, deletePresidents};