import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <Social />
    </div>
  );
}
const Social = (params) => {
  return (
    <div>
      <div className="social">
        <a
          href="https://www.instagram.com/dadopolumentaofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram color="white" size="3rem" />
        </a>
        <a
          href="https://www.facebook.com/dadopolumentaofficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook color="white" size="3rem" />
        </a>
      </div>
    </div>
  );
};
