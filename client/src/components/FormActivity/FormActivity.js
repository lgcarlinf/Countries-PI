import React, { useState, useEffect } from "react";
import { postActivities, getCountries } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './FormActivity.css'


export const FormActivity = () => {
  const dispatch = useDispatch();
  const allcountries = useSelector((state) => state.countries);

  const [input, setInput] = useState({
    countries: [],
    name: "",
    duracion: "",
    dificultad: "",
    temporada: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        temporada: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(postActivities(input));
    alert("actividad creada");

    setInput({
      countries: [],
      name: "",
      duracion: "",
      dificultad: "",
      temporada: "",
    });
  };

  useEffect(() => {
    dispatch(getCountries());
  
  }, []);

  return (
    <div className='containerForm'>
      <Link className='btnBack' to="/countries">
      <i className="fas fa-arrow-left"></i>  Volver
      </Link>
      
      <div className='containerFormulario'>
      <h2>Crea tu Actividad </h2>
      <div className='formulario'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label className='lbl'>Actividad:</label>
          <input
          className='inputActivity'
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className='lbl'>Pais:</label>
          <select className='select selectForm selectCountry' onChange={(e) => handleSelect(e)}>
           {/*  <option value="0">Select Country</option> */}
            {allcountries
              ?.sort((a, b) => {
                if (a.name > b.name) {
                  return 1;
                }
                if (b.name > a.name) {
                  return -1;
                }
                return 0;
              })
              .map((country, i) => (
                <option value={country.id} key={i}>
                  {country.name}
                </option>
              ))}
          </select>
          <ul>
            <li className='lista'>{input.countries.map((el) => el + " ,")}</li>
          </ul>
        </div>

        <div className='duracion'>
          <label className='lbl'>Duracion:</label>
          <select
             className='select selectForm' 
            defaultValue={{  value: 0 }}
            name="duracion"
            value={input.duracion}
            onChange={(e) => handleChange(e)}
          >
           <option value="0">Select Duration</option> 
            <option value="30">30 min</option>
            <option value="1">1 hour</option>
            <option value="2">2 hour</option>
            <option value="3">3 hour</option>
            <option value="4">4 hour</option>
            <option value="5">more than 5 hours</option>
          </select>
        </div>
        <div>
          <label className='lbl'>Dificultad:</label>
          <select
          className='select selectFormy'
            name="dificultad"
            value={input.dificultad}
            onChange={(e) => handleChange(e)}
          >
            <option value="0">Select Difficult</option> 
            <option value="1">1- Beginner</option>
            <option value="2">2- Low</option>
            <option value="3">3- Medium</option>
            <option value="4">4- High</option>
            <option value="5">5- Professional</option>
          </select>
        </div>
        <div className='checkbox'>
          <label className='lbl'>Elija la temporada:</label>
          <label>
            <input
              type="checkbox"
              name="Verano"
              value="Verano"
              onChange={(e) => handleCheck(e)}
            />
            Verano
          </label>
          <label>
            <input
              type="checkbox"
              name="Invierno"
              value="Invierno"
              onChange={(e) => handleCheck(e)}
            />
            Invierno
          </label>
          <label>
            <input
              type="checkbox"
              name="Otoño"
              value="Otoño"
              onChange={(e) => handleCheck(e)}
            />
            Otoño
          </label>
          <label>
            <input
              type="checkbox"
              name="Primavera"
              value="Primavera"
              onChange={(e) => handleCheck(e)}
            />
            Primavera
          </label>
        </div>
        <button className='btnSubmit' type="submit">Create</button>
      </form>
      </div>
      </div>
    </div>
  );
};
