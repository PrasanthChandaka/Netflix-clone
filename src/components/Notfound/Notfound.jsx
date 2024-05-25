import React from "react";
import "./Notfound.css";
import notfoundImg from "../../assets/undraw_page_not_found_re_e9o6.svg";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found">
      <div>
        <h1>Something went wrong</h1>
        <p>
          Sorry, we couldn't find the page you were looking for. To return to
          the Netflix homepage click on the button below.
        </p>
        <Link to="/home">
          <button type="button">GO HOME</button>
        </Link>
      </div>
      <img src={notfoundImg} alt="not-found" />
    </div>
  );
};

export default Notfound;
