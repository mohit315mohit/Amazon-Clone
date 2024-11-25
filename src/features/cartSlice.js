import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartSlice")
    ? JSON.parse(localStorage.getItem("cartSlice"))
    : [],

  cartTotal: 0,

  cartSize: localStorage.getItem("cartSlice")
    ? JSON.parse(localStorage.getItem("cartSlice")).length
    : 0,

  cartSubtotal: localStorage.getItem("cartSlice")
    ? JSON.parse(localStorage.getItem("cartSlice")).reduce((acc, item) => {
        return acc + parseInt(item.discounted_price ? item.discounted_price.slice(1) : item.actual_price.slice(1))
      },0)
    : 0,

  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.product_id === payload.product_id
      );

      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      state.cartSubtotal += payload.discounted_price
        ? parseInt(payload.discounted_price.slice(1))
        :parseInt(payload.actual_price.slice(1));
      state.cartSize += 1;
      localStorage.setItem("cartSlice", JSON.stringify(state.cart));
    },

    removeFromCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (item) => item.product_id === payload.product_id
      );
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item.product_id != payload.product_id
        );
      }
      state.cartSize -= 1;
      state.cartSubtotal -= payload.discounted_price
        ? parseInt(payload.discounted_price.slice(1))
        : parseInt(payload.actual_price.slice(1));
      localStorage.setItem("cartSlice", JSON.stringify(state.cart));
    },

    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    clearCart: (state) => {
      state.cart = [];
      state.cartSize = 0;
      state.cartSubtotal = 0;
      localStorage.removeItem("cartSlice");
    },

    // updateCart: (state, { payload }) => {
    //   const index = state.cart.findIndex(
    //     (item) => item.product_id === payload.product_id
    //   );
    //   state.cart[index] = payload;
    //   state.cartSubtotal = state.cart.reduce((acc, item) => {
    //     return acc + parseInt(item.discounted_price? item.discounted_price.slice(1) : item.actual_price.slice(1))
    //   },0);
    //   localStorage.setItem("cartSlice", JSON.stringify(state.cart));
    // },
  },
});

export const { addToCart, toggleCart, removeFromCart ,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
