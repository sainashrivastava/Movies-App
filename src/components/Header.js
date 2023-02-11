import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import user from "../images/usericon1.jpg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt={user} />
      </div>
    </div>
  );
};

export default Header;
