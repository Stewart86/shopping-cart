import React, { createContext, useEffect, useState } from "react"

import { getAllProducts } from "../api/product"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    let mounted = true
    const getProductFromDB = async () => {
      if (mounted) {
        const dbProducts = await getAllProducts()
        setProducts(dbProducts)
      }
    }
    getProductFromDB()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
