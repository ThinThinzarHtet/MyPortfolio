import { links } from "../data";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";

import HamburgerIcon from "./base/HamburgerIcon";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
        <HamburgerIcon
          showMenu={showMenu}
          width="20"
          height="20"
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          lineProps={{ strokeLinecap: "round" }}
          strokeWidth={4}
          color="#666666"
        />
      </div>
    </nav>
  );
};

export default Navbar;
