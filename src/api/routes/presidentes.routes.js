const express = require("express"); 

const router = express.Router ();

const {getAllPresidents, postNewPresidents, putPresidents, deletePresidents} = require("../controllers/presidentes.controllers");

router.get("/", getAllPresidents);
router.post("/", postNewPresidents);
router.put("/:id", putPresidents);
router.delete("/:id", deletePresidents);



module.exports = router;