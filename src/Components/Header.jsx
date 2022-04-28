import React from "react";
import Logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <img src={Logo}></img>
      <h1>Meme Generator</h1>
      <h2>React Course - Project 3</h2>
    </header>
  );
}

export default Header;
