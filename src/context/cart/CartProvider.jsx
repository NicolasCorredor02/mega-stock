import { CartContext } from "@/context/cart/cartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const getQuantity = () => {
    return cart.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);
  };

  const getTotal = () => {
    return cart.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);  
  }

  const addToCart = (product, quantity) => {
    if (cart.some((item) => item.id === product.id)) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: quantity,
          };
        }
        return item;
      });

      setCart(newCart);
    } else {
      const newProduct = {
        ...product,
        quantity: quantity,
      };

      setCart([...cart, newProduct]);
    }
  };

  const addQuantity = (product) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }
      return item;
    })
    setCart(newCart);
  }

  const discountQuantity = (product) => {
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, getQuantity, getTotal, addToCart, addQuantity, discountQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
