import React from 'react'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';
import { API_URL } from '../constant';
import { store } from "../store";
import { calculateTotals, clearCart } from '../features/cart/cartSlice';

const Cart = () => {

  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);

  const isCartEmpty = async () => {
    if (cartItems.length === 0) {
      toast.error("Tu carrito esta vacío");
    } else {
      await saveToOrderHistory();
    }
  }

  const saveToOrderHistory = async () => {
    try {
      const response = await axios.post(`${API_URL}/orders`, {
        userId: localStorage.getItem("id"),
        orderStatus: "in progress",
        subtotal: total,
        cartItems: cartItems,
      }).then((response) => {
        store.dispatch(clearCart());
        store.dispatch(calculateTotals());
        toast.success("Pedido completado");
        navigate("/thank-you");
      });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <SectionTitle title="Carrito" path="Inicio | Carrito" />
      <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {loginState ? (
            <button type='button' onClick={isCartEmpty} className='btn-primary-full'>
              Ordenar ahora
            </button>
          ) : (
            <Link to='/login' className='btn bg-blue-600 hover:bg-blue-500 btn-block text-white mt-8'>
              Por favor inicia sesión
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart