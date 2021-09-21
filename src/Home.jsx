import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import rocket from "../src/images/rocket.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="BADAO APNA VYPAR @"
        imgsrc={rocket}
        visit="/service"
        btname="GET STARTED"
      />
    </>
  );
};

export default Home;
