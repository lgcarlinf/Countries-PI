import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import video from "https://countries-g56m8unth-lgcarlinf.vercel.app/";
import { Loading } from "../Loading/Loading";

export const LandingPage = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (video) {
      setInit(true);
    }
  }, [video]);

  return (
    <>
      {init ? (
        <div className="containerLanding">
          <video className="video " autoPlay loop muted>
            <source src={video} type="video/mp4" />
          </video>
          <h1>Countries PI</h1>
          <Link className="link" to="/countries">
            Ingresa Aqui
          </Link>
        </div>
      ) : (
        <div className="container-general" style={{ alignItems: "center" }}>
          <Loading />
        </div>
      )}
    </>
  );
};
