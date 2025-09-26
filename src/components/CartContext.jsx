import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  // Agregar ítem al carrito
  const addItem = (item, quantity) => {
    const exists = cartList.find((prod) => prod.id === item.id);
    if (exists) {
      setCartList(
        cartList.map((prod) =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };

  
  const deleteItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

 
  const clear = () => setCartList([]);

  
  const isInCart = (id) => cartList.some((prod) => prod.id === id);

 
  const calcItemsQty = () => cartList.reduce((acc, prod) => acc + prod.quantity, 0);

  
  const calcTotal = () =>
    cartList.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartList, addItem, deleteItem, clear, isInCart, calcItemsQty, calcTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
