import axios from "axios";
import React, { useState } from "react";
import {
  QuantityInput,
  SectionTitle,
} from "../components";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { store } from "../store";
import { API_URL } from "../constant";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;

  const response = await axios(`${API_URL}/products/${id}`);

  return { productData: response.data };
};

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { productData } = useLoaderData();

  const product = {
    id: productData?.id,
    title: productData?.name,
    image: productData?.imageUrl,
    price: productData?.price,
    amount: quantity,
  };


  return (
    <>
      <SectionTitle title="Página del producto" path="Inicio | Comprar | Página del producto" />
      <div className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5">
        <div className="product-images flex flex-col justify-center max-lg:justify-start">
          <img
            src={`${productData?.imageUrl}`}
            className="w-96 text-center border border-gray-600 cursor-pointer"
            alt={productData.name}
          />
        </div>
        <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
          <h2 className="text-5xl max-sm:text-3xl text-accent-content">
            {productData?.name}
          </h2>
          <p className="text-3xl text-error">
            ${productData?.price}
          </p>
          <div className="text-xl max-sm:text-lg text-accent-content">
            {productData?.description && parse(productData?.description)}
          </div>
          <div>
            <label htmlFor="Quantity" className="sr-only">
              Cantidad{" "}
            </label>

            <div className="flex items-center gap-1">
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
            <button
              type="button"
              className="btn bg-blue-600 hover:bg-blue-500 text-white"
              onClick={() => {
                if (loginState) {
                  dispatch(addToCart(product));
                } else {
                  toast.error(
                    "Debes iniciar sesión para agregar productos al carrito."
                  );
                }
              }}
            >
              <FaCartShopping className="text-xl mr-1" />
              Agregar al carrito
            </button>
          </div>
          <div className="other-product-info flex flex-col gap-x-2">
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              SKU: {productData?.productCode}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              Categoria: {productData?.category}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default SingleProduct;
