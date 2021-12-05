import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="h-0.5 bg-black mb-5"></div>
      <NavLink
        to={pathname === "/" ? "cards/card" : "/"}
        className="shadow-xl px-4 py-1 bg-blue-300 rounded-full"
      >
        {pathname === "/" ? "Go to Viewer" : "Go Home"}
      </NavLink>
    </div>
  );
}

export default Footer;
