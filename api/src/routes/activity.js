const { Router } = require("express");
const router = Router();
const { Activity,Country } = require("../db");



router.get('/',async(req,res)=>{
    try {
        const activities = await Activity.findAll({include:Country})
        return res.json(activities)
    } catch (error) {
        console.log(error)
    }
   

})

router.post('/', async(req,res)=>{
    try {
        const {name,dificultad,duracion,temporada,countries} = req.body;

        const createActivity = await Activity.create({
            name,
            dificultad,
            duracion,
            temporada
        });
        await createActivity.setCountries(countries); 
       /*  console.log(req.body) */
        res.json({msg:'se creo exitosamente'});
    } catch (error) {
        console.log(error);
    }
   
})




module.exports = router;