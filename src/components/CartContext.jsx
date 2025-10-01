import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const addItem = (item, quantity) => {
    setCartList(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p => p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p);
      } else {
        return [...prev, { ...item, quantity }];
      }
    });
  };

  const deleteItem = (id) => setCartList(prev => prev.filter(p => p.id !== id));
  const clear = () => setCartList([]);
  const isInCart = (id) => cartList.some(p => p.id === id);
  const calcItemsQty = () => cartList.reduce((acc, p) => acc + (p.quantity || 0), 0);
  const calcTotal = () => cartList.reduce((acc, p) => acc + (p.price * p.quantity), 0);

  return (
    <CartContext.Provider value={{ cartList, addItem, deleteItem, clear, isInCart, calcItemsQty, calcTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
