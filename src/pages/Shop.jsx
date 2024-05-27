/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Filters,
  Pagination,
  ProductElement,
  SectionTitle,
} from "../components";
import "../styles/Shop.css";
import axios from "axios";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { API_URL } from "../constant";

export const shopLoader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const filterObj = {
    category: params.category ?? "all",
    search: params.search ?? "",
    current_page: Number(params.page) || 1
  };

  const parameter = `?_page=${(filterObj.current_page)}&_limit=10${filterObj.category !== 'all' ? `&category=${filterObj.category}` : ""}${(filterObj.search !== '') ? `&q=${encodeURIComponent(filterObj.search)}` : ""}`

  try {
    const response = await axios(
      `${API_URL}/products${parameter}`

    );
    const data = response.data;

    return { productsData: data, productsLength: data.length, page: filterObj.current_page };
  } catch (error) {
    console.log(error.response);
  }

  return null;
};




const Shop = () => {

  const productLoaderData = useLoaderData();


  return (
    <>
      <SectionTitle title="Comprar" path="Inicio | Comprar" />
      <div className="max-w-7xl mx-auto mt-5">
        <Filters />
        {productLoaderData.productsData.length === 0 && <h2 className="text-accent-content text-center text-4xl my-10">No se encontraron productos para este filtro.</h2>}
        <div className="grid grid-cols-4 px-2 gap-y-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 shop-products-grid">
          {productLoaderData.productsData.length !== 0 &&
            productLoaderData.productsData.map((product) => (
              <ProductElement
                key={nanoid()}
                id={product.id}
                title={product.name}
                image={product.imageUrl}
                price={product.price}
              />
            ))}
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Shop;
