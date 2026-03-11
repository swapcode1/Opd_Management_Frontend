// import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="container-fluid">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-2">
          <div className="col-md-3 mb-2 mb-md-0">
            <Link to={"/"}>
              <a className="navbar-brand">
                <img
                  style={{ width: "120px" }}
                  src="logo.png"
                  alt="ifjvoijsfvjisa"
                />
              </a>
            </Link>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-item">
                <p className="nav-link text-decoration-none">Login</p>
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-item text-decoration-none">
                <p className="nav-link">register</p>
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;
