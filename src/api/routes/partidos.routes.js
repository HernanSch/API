const express = require("express"); 

const router = express.Router ();


const {getAllParties, postNewParties, putParties, deleteParties} = require("../controllers/partidos.controllers");

router.get("/", getAllParties);
router.post("/", postNewParties);
router.put("/:id", putParties);
router.delete("/:id", deleteParties);



module.exports = router;