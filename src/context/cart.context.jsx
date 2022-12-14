import { createContext, useState, useEffect } from "react";

const INITIAL_STATE = {
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
};

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

export const CartContext = createContext(INITIAL_STATE);

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (accumulator, item) => accumulator + (item.quantity * item.price),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
