import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
    <h3 className="navbar-brand">Cartoon memory...</h3>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarText">
    <div className="navbar-nav ml-auto mr-auto">
        {props.navMessage}
    </div>
      <div className="navbar-text">
        Score: {props.score} | High Score: {props.highScore}
      </div>
    </div>
  </nav>
  );
}

export default Nav;
