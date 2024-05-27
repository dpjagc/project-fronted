import React, { useEffect } from "react";
import { SectionTitle } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ThankYou = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loginState) {
      toast.error("Debes iniciar sesión para acceder a esta página");
      navigate("/");
    }
  }, []);


  return (
    <>
      <SectionTitle title="Gracias" path="Inicio | Carrito | Gracias" />
      <div className="thankyou-content text-center text-accent-content px-10 max-w-7xl mx-auto">
        <h2 className="text-6xl max-sm:text-4xl">
          Gracias por su compra!
        </h2>

        <h3 className="text-2xl mt-10 max-sm:text-xl">
          ¡Esperamos que te gusten tus equipos tecnologicos! Apreciamos su
          compra y esperamos verlo pronto nuevamente.
        </h3>
        <h3 className="text-2xl mt-5 max-sm:text-xl">
          Aquí hay algunas cosas que puedes hacer a continuación:
        </h3>
        <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/order-history">&rarr; Ver historial de pedidos &larr;</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">&rarr; Explora productos y compra más &larr;</Link>
          </li>
        </ul>

        <h4 className="text-xl mt-5 max-sm:text-lg">
          ¡Gracias nuevamente por su compra!
        </h4>
      </div>
    </>
  );
};

export default ThankYou;
