import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          Inicio
        </Link>
        <Link to="/shop" onClick={() => window.scrollTo(0, 0)}>
          Comprar
        </Link>
        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
          Sobre nosotros
        </Link>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          Contactenos
        </Link>
        {!loginState && (
          <>
            <Link
              to="/login"
              onClick={() => window.scrollTo(0, 0)}
            >
              Iniciar Sesion
            </Link>
            <Link
              to="/register"
              onClick={() => window.scrollTo(0, 0)}
            >
              Registrarme
            </Link>
          </>
        )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="/"> <i className="fa-brands fa-facebook" /></a>
          <a href="/"> <i className="fa-brands fa-twitter" /></a>
          <a href="/"> <i className="fa-brands fa-linkedin" /> </a>
          <a href="/"> <i className="fa-brands fa-instagram" /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
