import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { Loading } from "../Loading/Loading";

export const LandingPage = () => {
  const [init, setInit] = useState(false);

  const video =
    "https://res.cloudinary.com/dhtyfvv9i/video/upload/v1670359582/Time_and_Again_15_Countries_In_4_Minutes_2014_Time_Lapse_online_video_cutter_com_wogc2a.mp4";

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
