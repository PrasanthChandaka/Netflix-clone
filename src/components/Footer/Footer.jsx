import React, { useContext } from "react";
import { store } from "../../context";

const Footer = () => {
  const { option, setOption } = useContext(store);
  return (
    <div className="inner-container flex flex-col gap-8 text-white py-10 md:py-20 text-sm md:text-[16px] font-light">
      <p>
        Questions? Call{" "}
        <span className="underline cursor-pointer">000-800-919-1694</span>
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 underline cursor-pointer">
        <li>FAQ</li>
        <li>Help Center</li>
        <li>Account</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
      </ul>
    </div>
  );
};

export default Footer;
