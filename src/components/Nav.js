import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";
const Nav = ({ setlibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <logo className="logo">
        <img style={{ width: "5rem" }} src={logo} alt="logo" />
        {/* <h1>Dado Polumenta</h1> */}
      </logo>
      <div className="buttons">
        <button onClick={() => setlibraryStatus(!libraryStatus)}>
          {/* <FontAwesomeIcon className="icon" icon={faMusic} /> */}
          {!libraryStatus ? "Diskografija" : "Nazad"}
        </button>
        <a href="#contact">
          <button>Kontakt</button>
        </a>
        {/* <button>
          Gostovanja
          <FontAwesomeIcon icon={faMusic} />
        </button> */}
      </div>
    </nav>
  );
};

export default Nav;
