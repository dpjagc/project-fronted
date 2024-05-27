import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaWindowClose } from "react-icons/fa";
import "../styles/Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [id, setId] = useState(localStorage.getItem("id"));
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    setIsLoggedIn(loginState);
  }, [loginState]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" width="78" height="82" alt="logo" />
          </Link>
        </div>
        <div>
          <Link
            to="/search"
            className="btn-ghost"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn-ghost">
              <div className="indicator">
                <i className="fa-solid fa-cart-shopping" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-accent-content">
                  {amount} Productos
                </span>
                <span className="text-info text-accent-content">
                  Subtotal: ${total.toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn bg-blue-600 btn-block text-white hover:bg-blue-500 text-base-content"
                  >
                    Ver carrito
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {isLoggedIn && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn-ghost avatar">
                <div className="w-10 rounded-full">
                  <img aria-label="Profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    to="/user-profile"
                    className="justify-between text-accent-content"
                  >
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link to="/order-history" className="text-accent-content">
                    Historial de ordenes
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-accent-content">
                    Cerrar sesion
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-bottom-menu ">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn drawer-button">
              <img
                aria-label="menu"
                className="menu-mobile"
                src="/images/menu_icon.png"
                width="36"
                height="21"
              />
            </label>
          </div>
          <div className="drawer-side z-10">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-4">
              <label htmlFor="my-drawer" className="btn drawer-button">
                <FaWindowClose className="text-3xl ml-auto" />
              </label>
              <li className="text-xl">
                <NavLink className="text-accent-content" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="text-accent-content" to="/shop">
                  Comprar
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="text-accent-content" to="/about-us">
                  Sobre nosotros
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink className="text-accent-content" to="/contact">
                  Contactenos
                </NavLink>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="text-xl">
                    <NavLink className="text-accent-content" to="/login">
                      Iniciar sesion
                    </NavLink>
                  </li>
                  <li className="text-xl">
                    <NavLink className="text-accent-content" to="/register">
                      Registrarme
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="container text-2xl navlinks-container">
          <NavLink className="text-accent-content" to="/">
            Inicio
          </NavLink>
          <NavLink className="text-accent-content" to="/shop">
            Comprar
          </NavLink>
          <NavLink className="text-accent-content" to="/about-us">
            Sobre nosotros
          </NavLink>
          <NavLink className="text-accent-content" to="/contact">
            Contactenos
          </NavLink>
          {!isLoggedIn && (
            <>
              <NavLink className="text-accent-content" to="/login">
                Iniciar sesion
              </NavLink>
              <NavLink className="text-accent-content" to="/register">
                Registrarme
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
