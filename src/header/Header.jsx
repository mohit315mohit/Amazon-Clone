/* eslint-disable react/prop-types */
import image from "../assets/location.svg";
import logo from "../assets/amazon_logo.svg";
import search from "../assets/search.svg";
import flag from "../assets/indian_flag.svg";
import cartion from "../assets/cart.svg";
import { options } from "../constant";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {isCartOpen}
import { toggleCart } from "../features/cartSlice";

export default function Header() {
  const dispatch= useDispatch();
  const cartSize=useSelector(state=>state.cart.cartSize)
  return (
    <div className="amazon_header bg-[#0f1111] flex items-center p-4 text-white space-x-6">
      <Link className="logo flex-shrink-0" to={"/"}>
        <img src={logo} alt="Amazon Logo" className="h-10" />
      </Link>

      <div className="address flex flex-col text-xs">
        <span className="text-gray-300">Delivered in Deoband 247554</span>
        <div className="add_second_logo flex items-center space-x-1">
          <img className="h-4 w-4" src={image} alt="Location Icon" />
          <span className="text-white font-semibold">Update Location</span>
        </div>
      </div>

      <div className="search_bar flex items-center bg-yellow-400 rounded-md flex-grow">
        <select className="search_select bg-gray-100 text-black text-sm p-2 rounded-l-md w-14">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="flex-grow p-2 outline-none text-black"
        />
        <button className="search_button p-2 bg-yellow-500 rounded-r-md">
          <img src={search} alt="Search Icon" className="h-5" />
        </button>
      </div>

      <div className="language flex items-center space-x-1">
        <img src={flag} alt="Indian Flag" className="h-5" />
        <select className="main_lang bg-gray-800 text-xs p-1 rounded text-white">
          <option value="English">EN</option>
          <option value="French">FA</option>
          <option value="Hindi">HN</option>
        </select>
      </div>

      <div className="signin flex flex-col text-xs">
        <span className="text-gray-300">Hello, Sign In</span>
        <div className="line2">
          <select className="bg-transparent text-white font-semibold">
            <option value="Account & Lists">Account & Lists</option>
          </select>
        </div>
      </div>

      <div className="order_return flex flex-col text-xs text-center">
        <span className="text-gray-300">Returns</span>
        <span className="font-semibold">& Orders</span>
      </div>

      <div
        className="cart flex items-center space-x-1 cursor-pointer relative"
        onClick={() => dispatch(toggleCart())}
      >
        <div className="flex flex-col-reverse">
          <img src={cartion} alt="Cart Icon" className="h-8 top-1" />
          <div className="cart_count text-yellow-500 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center absolute top-[4px] right-[43px]">
          {cartSize}
          </div>
        </div>
        <div className="cart_line text-white font-semibold">Cart</div>
      </div>
    </div>
  );
}
