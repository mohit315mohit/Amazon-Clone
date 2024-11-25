import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./path-to-your-cartSlice-file";
import cartReducer from "./features/cartSlice"

// Create the Redux store
const store = configureStore({
  reducer: {
    // Add your reducers here
    cart: cartReducer,
  },
});

// Export the store to use it in your application
export default store;
