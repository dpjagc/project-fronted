import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../constant";

const Profile = () => {
  const [id, setId] = useState(localStorage.getItem("id"));
  const [userData, setUserData] = useState({});
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const [userFormData, setUserFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
  });
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await axios(`${API_URL}/auth/user/${id}`);
      const data = response.data;
      setUserFormData({
        name: data.name,
        email: data.email,
        phone: data.phone,
        adress: data.adress,
        password: data.password,
      });
    } catch (error) {
      toast.error("Error: ", error.response);
    }
  };

  useEffect(() => {
    if (loginState) {
      getUserData();
    } else {
      toast.error("Debes iniciar sesión para acceder a esta página");
      navigate("/");
    }
  }, []);

  const updateProfile = async (e) => {
    e.preventDefault();
    try {

      const getResponse = await axios(`${API_URL}/auth/user/${id}`);
      const userObj = getResponse.data;

      await axios.put(`${API_URL}/auth/user/${id}`, {
        id: id,
        name: userFormData.name,
        email: userFormData.email,
        phone: userFormData.phone,
        adress: userFormData.adress,
        password: userFormData.password,
      }).then(() => {
        toast.success("Tu perfil se actualizo correctamente");
      });

    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <>
      <SectionTitle title="Perfil del usuario" path="Inicio | Perfil del usuario" />
      <form className="max-w-7xl mx-auto text-center px-10" onSubmit={updateProfile}>
        <div className="grid grid-cols-3 max-lg:grid-cols-1">
          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">Tu nombre</span>
            </label>
            <input
              type="text"
              placeholder="Escribe aqui"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.name}
              onChange={(e) => { setUserFormData({ ...userFormData, name: e.target.value }) }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Escribe aqui"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.email}
              onChange={(e) => { setUserFormData({ ...userFormData, email: e.target.value }) }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">Tu Telefono</span>
            </label>
            <input
              type="tel"
              placeholder="Escribe aqui"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.phone}
              onChange={(e) => { setUserFormData({ ...userFormData, phone: e.target.value }) }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">Tu dirección</span>
            </label>
            <input
              type="text"
              placeholder="Escribe aqui"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.adress}
              onChange={(e) => { setUserFormData({ ...userFormData, adress: e.target.value }) }}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">Tu contraseña</span>
            </label>
            <input
              type="password"
              placeholder="Escribe aqui"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.password}
              onChange={(e) => { setUserFormData({ ...userFormData, password: e.target.value }) }}
            />
          </div>
        </div>
        <button
          className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
          type="submit"
        >
          Actualizar perfil
        </button>
      </form>
    </>
  );
};

export default Profile;
