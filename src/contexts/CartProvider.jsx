import React from "react"
import { createContext } from "react"
import { useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((item) => {
      item.push(product)
      setCartCount(item.length)
      return item
    })
  }
  return (
    <CartContext.Provider value={{ addToCart, cartCount, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
