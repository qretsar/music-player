import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.png";
const Nav = ({ setlibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <img style={{ width: "5rem" }} src={logo} alt="logo" />
      {/* <h1>Dado Polumenta</h1> */}
      <button onClick={() => setlibraryStatus(!libraryStatus)}>
        Discography
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
