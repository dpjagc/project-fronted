import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { API_URL } from "../constant";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "";

    if (name.length === 0) {
      isProceed = false;
      errorMessage = "Por favor ingrese el valor en el campo de nombre de usuario";
    } else if (email.length === 0) {
      isProceed = false;
      errorMessage = "Por favor ingrese el valor en el campo de correo electrónico";
    } else if (phone.length < 4) {
      isProceed = false;
      errorMessage = "PEl teléfono debe tener más de 3 caracteres.";
    } else if (adress.length < 4) {
      isProceed = false;
      errorMessage = "La dirección debe tener más de 3 caracteres.";
    } else if (password.length < 6) {
      isProceed = false;
      errorMessage = "Por favor ingrese una contraseña de más de 5 caracteres";
    } else if (confirmPassword.length < 6) {
      isProceed = false;
      errorMessage = "Por favor ingrese una contraseña de confirmación de más de 5 caracteres";
    } else if (password !== confirmPassword) {
      isProceed = false;
      errorMessage = "Las contraseñas deben coincidir";
    }

    if (!isProceed) {
      toast.warn(errorMessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regObj = {
      name,
      email,
      phone,
      adress,
      password,
    };

    if (isValidate()) {
      axios.post(`${API_URL}/auth/register`, regObj)
        .then((res) => {
          toast.success("Registro exitoso");
          navigate("/login");
        })
        .catch((err) => {
          toast.error(`Fallido: ${err.message}`);
        });
    }
  };
  return (
    <>
      <SectionTitle title="Registro" path="Inicio | Registro" />
      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
            <form className="px-5 py-7" onSubmit={handleSubmit}>
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                Nombre
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                E-mail
              </label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                Telefono
              </label>
              <input
                type="tel"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                Direccion
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                Contraseña
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                Repetir contraseña
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              <button
                type="submit"
                style={{ width: "100%" }}
                className="btn-primary-full"
              >
                <span className="inline-block mr-2">Registrarme</span>
                <svg
                  title="Registrarme"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="py-5 text-center">
            <Link
              to="/login"
              className="btn btn-neutral text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              Already have an account? Please login.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
