import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import rocket1 from "../src/images/rocket1.svg";
import Common from "./Common";

const About = () => {
    return (
        <>
      <Common
        name="Contact karo hume @"
        imgsrc={rocket1}
        visit="/contact"
        btname="about us"
      />
    </>
    )
}

export default About;
