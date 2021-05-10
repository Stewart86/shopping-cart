import React from "react"
import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState({})

  const addToCart = (product) => {
    setCartItems((item) => {
      if (!item[product.id]) {
        item[product.id] = {
          quantity: 1,
          title: product.title,
          price: product.price,
        }
      } else {
        item[product.id].quantity += 1
      }
      setCartCount(
        Object.keys(item)
          .map((id) => item[id].quantity)
          .reduce((a, b) => a + b)
      )
      return item
    })
  }
  return (
    <CartContext.Provider value={{ addToCart, cartCount, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
