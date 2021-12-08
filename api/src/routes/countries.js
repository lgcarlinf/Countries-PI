const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { Country,Activity } = require("../db");

router.get("/", async (req, res) => {
  try {
    const namePais = req.query.name;
    const countriesDb = await Country.findAll({
      include: Activity
    });
    if (countriesDb.length == 0) {
      const request = await axios.get("https://restcountries.com/v3/all");
      const response = request.data;
      const countries = response.map((country) => {
        return {
          id: country.cca3,
          name: country.name.common.toLowerCase(),
          image: country.flags[1],
          continente: country.region,
          capital: country.capital ? country.capital[0] : "No Tiene",
          subRegion: country.subregion,
          area: country.area,
          poblacion: country.population
        
        };
      });

      await Country.bulkCreate(countries);

      return res.json(countries);
    }else if(namePais){
      const countries = await Country.findAll({
        where: {
          name: namePais
        },
        include : Activity
       
      });
      
      if(countries[0]){
        console.log(countries);
        return res.json(countries);
      }else{
        return res.json({msg:'No existe el pais'});
        
      }
     
    }
   
     return res.json(countriesDb); 
  } catch (error) {
    console.log(error);
  }
});

router.get("/:idPais", async (req, res) => {
  try {
    const idPais = req.params.idPais.toUpperCase();
    if (idPais) {
      const country = await Country.findOne({
        where: {
          id: idPais,
        },
      });
      const activities = await country.getActivities();
      res.json({ country, activities });
    }
  } catch (error) {
     console.log(error); 
    res.json("not found");
  }
});



module.exports = router;
