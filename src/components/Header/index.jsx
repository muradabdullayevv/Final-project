import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../../layout.css";

function Header() {
  return (
    <>
      <header>
        <div className="container   ">
          <div className="nav">
            <div className="logo">
              <img src={logo} />
            </div>
            <div class="nav_items">
              <ul className="links">
                <NavLink to="/home">Ana səhifə</NavLink>
                <NavLink to="/about">Haqqımızda</NavLink>
                <NavLink to="/features">Xüsusiyyətləri</NavLink>
                <NavLink to="/pricing">Qiymətlər</NavLink>
                <NavLink to="/FAQ">Suallar</NavLink>
                <NavLink to="/blog">BLog</NavLink>
                {/* <NavLink as='button' className="nav_btn" to="/contact">Contact Us</NavLink> */}
                <div className="us">
                  <NavLink to="/contactus">Bizimlə əlaqə</NavLink>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
