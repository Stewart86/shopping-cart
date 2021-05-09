import { Container, Grid } from "@material-ui/core"
import React, { useEffect } from "react"

import { ProductCard } from "../components/ProductCard"
import { getAllProducts } from "../api/product"
import { useState } from "react"

export const Home = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    const products = async () => {
      const dbProducts = await getAllProducts()
      console.log(dbProducts)
      setProducts(dbProducts)
    }
    products()
  }, [products])
  return (
    <Container>
      <Grid container spacing={2}>
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </Grid>
    </Container>
  )
}
