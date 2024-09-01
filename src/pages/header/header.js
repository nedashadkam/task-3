import React from "react";
import "./header.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <button>
          <Link to="/login">ورود</Link> /<Link to="/createUser">ثبت نام</Link>
        </button>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
