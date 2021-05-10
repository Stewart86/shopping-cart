import { Container, Grid } from "@material-ui/core"
import React, { useEffect } from "react"

import { Loading } from "../components/Loading"
import { ProductCard } from "../components/ProductCard"
import { getAllProducts } from "../api/product"
import { useState } from "react"

export const Home = () => {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    const products = async () => {
      if (mounted) {
        const dbProducts = await getAllProducts()
        setProducts(dbProducts)
        setLoading(false)
      }
    }
    products()
    return () => {
      mounted = false
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Grid container spacing={1}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
    </Container>
  )
}
