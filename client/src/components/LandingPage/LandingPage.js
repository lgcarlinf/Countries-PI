import React, { useEffect, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import video from "../../assets/Time and Again   15 Countries In 4 Minutes 2014 Time Lapse online video cutter com.mp4";
import { Loading } from "../Loading/Loading";

export const LandingPage = () => {
  const [init, setInit] = useState(false);
  /* 
  useEffect(() => {
    const timer = setTimeout(() => {
      setInit(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
 */
  return (
    <>
      <div className="containerLanding">
        <Suspense
          fallback={
            <div className="container-general" style={{ alignItems: "center" }}>
              <Loading />
            </div>
          }
        >
          <video
            className="video "
            poster="../../assets/mapa.jpeg"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
        </Suspense>
        <h1>Countries PI</h1>
        <Link className="link" to="/countries">
          Ingresa Aqui
        </Link>
      </div>
    </>
  );
};
