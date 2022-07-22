import React, { useState, useEffect } from "react";

const Navbar = () => {
  // pour ouvrir/fermer menu nav
  const [toggleMenu, setToggleMenu] = useState(false);
  const [, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <a
        target="_blank"
        href="https://www.google.fr/"
        rel="noreferrer"
        className="nav-icon"
        aria-label="visit homepage"
        aria-current="page"
      >
        <img src="../../public/assets/logo.svg" alt="" />
        <span>WorldProtect</span>
      </a>

      <div className="main-navlinks">
        <button
          onClick={toggleNavSmallScreen}
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="navlinks-container">
        <a href="https://www.google.fr/" rel="noreferrer">
          Présentation
        </a>
        <a href="https://www.google.fr/" rel="noreferrer">
          Mes recettes
        </a>
        <a href="https://www.google.fr/" rel="noreferrer">
          Mes produits
        </a>

        <a href="https://www.google.fr/" rel="noreferrer">
          Livre d or
        </a>
      </div>
      {toggleMenu && (
        <div className="navlinks-container">
          <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
            Présentation
          </a>
          <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
            Mes recettes
          </a>
          <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
            Mes produits
          </a>
          <a target="_blank" href="https://www.google.fr/" rel="noreferrer">
            Livre d or
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
