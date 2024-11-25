export const addToCart = (data) => {
  let cart = localStorage.getItem("cartvalue")
    ? JSON.parse(localStorage.getItem("cartvalue"))
    : [];

  let product = cart.find((item) => item.product_id === data.product_id);
  if (product) {
    product.quantity += 1;
  } else product = { ...data, quantity: 1 };

  const newone = JSON.stringify([
    ...cart.filter((item) => item.product_id != data.product_id),product
  ]);
  console.log(newone);
  localStorage.setItem("cartvalue", newone);
  console.log(product);
};

// eslint-disable-next-line no-unused-vars
export const removeFromCart = (itemToRemove, setCart, setIsCartOpen) => {
  setCart((prevCart) => {
    const itemInCart = prevCart.find(
      (cartItem) => cartItem.id === itemToRemove.id
    );
    if (itemInCart && itemInCart.quantity > 1) {
      return prevCart.map((cartItem) =>
        cartItem.id === itemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    } else {
      const newCart = prevCart.filter(
        (cartItem) => cartItem.id !== itemToRemove.id
      );
      if (newCart.length === 0) setIsCartOpen(false);
      return newCart;
    }
  });
};
