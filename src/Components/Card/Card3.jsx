/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";


export default function Card3({ data }) {
  const dispatch = useDispatch();
  // const coming_cart = useSelector((state) => state.cart.cart);
  // console.log(data);

  return (
    <div className="flex h-fit overflow-x-auto bg-white">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col flex-shrink-0">
          <img
            className="h-[250px] w-full object-cover"
            src={item.img_link}
            alt={`Product ${item.product_id}`}
          />
          <button className="mx-2 bg-[#dc7542]" onClick={() => dispatch(addToCart(item))}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
