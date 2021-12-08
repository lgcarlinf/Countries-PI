const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country } = require("../db");
const activityRouter = require("./activity");
const countriesRouter = require("./countries");

const router = Router({mergeParams:true});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/activity", activityRouter);
router.use("/countries", countriesRouter);



    







    module.exports = router;
