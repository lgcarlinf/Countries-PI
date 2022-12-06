import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  filterCountryByRegion,
  orderByName,
  orderByPoblation,
  getActivities,
  filterByActivity,
} from "../../actions";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";
import { Paginado } from "../Paginado/Paginado";
import "./MainApp.css";
import { Navbar } from "../Navbar/Navbar";
import { Loading } from "../Loading/Loading";
import { Searchbar } from "../Searchbar/Searchbar";

export const MainApp = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, []);

  const handleFilterRegion = (e) => {
    dispatch(filterCountryByRegion(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterPoblation = (e) => {
    e.preventDefault();
    dispatch(orderByPoblation(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };

  const handleFilterActivity = (e) => {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };
  return (
    <div className="init">
      <Navbar />
      <div className="filter">
        <div className="filterSearch">
          <Searchbar />
        </div>
        <div className="filterName">
          <p>Por Nombre:</p>
          <select className="select" onChange={(e) => handleFilterName(e)}>
            <option className="option" value="0">
              Alphabetic
            </option>
            <option className="option" value="asc">
              order by A-Z
            </option>
            <option className="option" value="desc">
              order by Z-A
            </option>
          </select>
        </div>
        <div className="filterPoblacion">
          <p>Poblacion:</p>
          <select className="select" onChange={(e) => handleFilterPoblation(e)}>
            <option className="option" value="0">
              Select Poblation
            </option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className="filterRegion">
          <p>Region:</p>
          <select className="select" onChange={(e) => handleFilterRegion(e)}>
            <option value="0">Select Region:</option>
            <option value="All">All</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antartida</option>
          </select>
        </div>
        <div className="filterActivity">
          <p>Activity:</p>
          <select className="select" onChange={(e) => handleFilterActivity(e)}>
            <option value="0">Select Activity</option>
            {allActivities.map((a, i) => (
              <option value={a.name} key={i}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <Link className="create" to="/countries/activity">
          Create Activity
        </Link>
      </div>

      <Paginado
        countriesPerPage={countriesPerPage}
        allCountries={allCountries.length}
        paginate={paginate}
      />
      <h1>Main APP </h1>

      <div className="containerCards">
        {allCountries && allCountries.length > 0 ? (
          currentCountries &&
          currentCountries.map((country) => {
            return (
              <div key={country.id}>
                <Link className="text" to={"/countries/" + country.id}>
                  <Card
                    key={country.id}
                    name={country.name}
                    continente={country.continente}
                    img={country.image}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <div className="container-general">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};
