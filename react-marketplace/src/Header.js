import React from "react";

const Header = (props) => {
  return (
    <header
      className={`container-fluid bg-${
        props.bgColor ? props.bgColor : "secondary"
      } text-white p-5  mb-5`}
    >
      <h2>{props.text && props.text}</h2>
      <h2>{!props.text && "Default Header Text"}</h2>
    </header>
  );
};

export const Nav = (props) => {
  //Destructuring
  const { logo, links } = props;

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width={100} alt={logo} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {links.map((link) => {
              const liElement = (
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    {link}
                  </a>
                </li>
              );
              return liElement;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
