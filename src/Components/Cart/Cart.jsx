/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  removeFromCart,
  clearCart,
} from "../../features/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const data = useSelector((state) => state.cart.cart);
  const subTotal = useSelector((state) => state.cart.cartSubtotal);
  const cartSize = useSelector((state) => state.cart.cartSize);

  // const data=JSON.parse(localStorage.getItem("cartvalue"));
  // console.log(data);
  // const totalAmount = data.length?data.reduce(
  //   (total, item) => total + item.discounted_price * item.quantity,
  //   0
  // ):0.00;
  // console.log(data)  ;
  return (
    isCartOpen && (
      <div className="cart-dropdown absolute top-[60px] right-6 bg-white shadow-lg w-74 p-4 rounded-md">
        <h2 className="text-xl font-bold mb-2">Your Cart</h2>
        {data.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="flex items-center">
                  <div>
                    <img
                      src={item.img_link}
                      alt={item.product_name}
                      className="h-12 w-12 object-contain mr-2"
                    />
                    <span className="text-[8px]">
                      Quantity :{item.quantity}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span>{item.product_name.slice(0, 20)}...</span>
                    <span className="text-black-500 text-sm flex">
                      Rs.{item.discounted_price}
                      <p className="text-[5px] pt-1">only</p>
                    </span>
                    <div className=" flex gap-1">
                      <span className="text--500 text-[10px]">
                        <s>{item.actual_price}</s>
                      </span>
                      <span className="text-red-500 text-xs">
                        {item.discount_percentage}
                        off
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {cartSize > 0 && (
          <div className="mt-4 flex justify-between">
            <span className="font-bold">Total: Rs. {subTotal}</span>
          </div>
        )}
        {/* Place Order Button */}
        {data.length > 0 && (
          <button
            onClick={() => {
              alert("Order Placed!");
              dispatch(clearCart());
              toggleCart();
            }}
            className="mt-4 p-2 bg-orange-300 text-white rounded w-full"
          >
            Place Order
          </button>
        )}

        <button
          onClick={() => dispatch(toggleCart())}
          className="mt-4 p-2 bg-orange-300 text-white rounded w-full"
        >
          Close Cart
        </button>
      </div>
    )
  );
}
