import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions";
import "./Country.css";

export const Country = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  const myCountry = useSelector((state) => state.details);

  const { country } = myCountry;

  return (
    <div className="containerDetails">
      <Link className="text-button" to="/countries">
        <i className="fas fa-arrow-left"></i>Atras
      </Link>

      <div className="detailsCountry">
        <div className="image">
          {<img className="img" src={country?.image} alt="" loading="lazy" />}
        </div>
        <div className="infoCountry">
          <h3 className="nameCountry">{country?.name}</h3>
          <p>
            <span className="subtitle">Capital :</span> {country?.capital}
          </p>
          <p>
            <span className="subtitle">Continente :</span> {country?.continente}
          </p>
          <p>
            <span className="subtitle">Population:</span>
            {country?.subRegion}
          </p>
          <p>
            <span className="subtitle">Population:</span>
            {country?.area}
          </p>
          <p>
            <span className="subtitle">Population:</span>
            {country?.poblacion}
          </p>
        </div>
      </div>
    </div>
  );
};
