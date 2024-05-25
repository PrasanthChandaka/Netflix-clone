import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell_icon.svg";
import caret from "../../assets/caret_icon.svg";
import search from "../../assets/search_icon.svg";
import profile from "../../assets/profile_img.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useRef();
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);
  useEffect(() => {
    window.addEventListener("wheel", () => {
      if (window.scrollY >= 30) {
        nav.current.classList.add("navbar-scroll");
      } else {
        nav.current.classList.remove("navbar-scroll");
      }
    });
  }, []);

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    navigate("/");
  };
  return (
    <div ref={nav} className="navbar">
      <div>
        <Link to="/home">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Tv Shows</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">New & Popular</a>
          </li>
          <li>
            <a href="#">My List</a>
          </li>
          <li>
            <a href="#">Browse by Languages</a>
          </li>
        </ul>
      </div>
      <div>
        <img src={search} alt="search-icon" />
        <p>Children</p>
        <img src={bell} alt="bell" />
        <div
          className="profile-container"
          onClick={() => setLogout((prev) => !prev)}
        >
          <img src={profile} alt="profile" />
          <img src={caret} alt="caret-icon" />
          {logout && (
            <div className="logout-div" onClick={logOut}>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
