import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="navbar">
      <div className="navbar-element">
        <ul>
          <li
            className={active === 0 ? "active" : ""}
            onClick={() => handleClick(0)}
          >
            <Link to="/">Ana Sayfa</Link>
          </li>
          <li
            className={active === 1 ? "active" : ""}
            onClick={() => handleClick(1)}
          >
            <Link to="/series">Diziler</Link>
          </li>
          <li
            className={active === 2 ? "active" : ""}
            onClick={() => handleClick(2)}
          >
            <Link to="/movies">Filmler</Link>
          </li>
          <li
            className={active === 3 ? "active" : ""}
            onClick={() => handleClick(3)}
          >
            <Link to="/watched">İzlediklerim</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
