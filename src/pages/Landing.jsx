import React, { useEffect } from "react";
import "../styles/Landing.css";
import { Hero, ProductElement } from "../components";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constant";

export const landingLoader = async () => {
  const response = await axios(
    `${API_URL}/products?_page=1&_limit=8`
  );
  const data = response.data;

  return { products: data };
};

const Landing = () => {
  const { products } = useLoaderData();
  const navigate = useNavigate();

  return (
    <main>
      <Hero />

      <div className="selected-products">
        <h2 className="text-6xl text-center my-12 max-md:text-4xl text-accent-content">
          Productos en tendencia
        </h2>
        <div className="selected-products-grid max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
