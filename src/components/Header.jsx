import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { TbLanguage } from "react-icons/tb";
import { store } from "../context";
import { Link } from "react-router-dom";

const Header = () => {
  const { option, setOption } = useContext(store);
  const changeOption = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="inner-container text-white flex justify-between items-center py-5 absolute top-0">
      <img src={logo} alt="logo" className="w-20 md:w-36" />
      <div className="flex gap-5">
        <select
          value={option}
          className="bg-transparent text-white border-[1px] border-[grey] px-5 rounded-md"
          onChange={changeOption}
        >
          <TbLanguage size={30} />
          <option className="text-black font-medium" value="English">
            English
          </option>
          <option className="text-black font-medium" value="Hindi">
            Hindi
          </option>
        </select>
        <Link to="/login">
          <button type="button" className="px-3 py-1 rounded-md bg-[#C11119]">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
