import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="col-md-4 my-4 col-10 mx-auto">
      <div className="card my-4">
        <img className="card-img-top" src={props.img} alt={props.img} />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <NavLink to="#" className="btn btn-primary">
            Go somewhere
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
