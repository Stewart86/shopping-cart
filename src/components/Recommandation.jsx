import { Grid, Typography } from "@material-ui/core"
import { useContext, useState } from "react"

import { ProductCard } from "./ProductCard"
import { ProductContext } from "../contexts/ProductProvider"
import React from "react"
import { useEffect } from "react"

export const Recommandation = ({ category }) => {
  const { products } = useContext(ProductContext)
  const [reduced, setReduced] = useState(null)
  useEffect(() => {
    let mounted = true
    if (mounted && products) {
      setReduced(() =>
        products
          .filter((item) => item.category === category)
          .sort(() => Math.random() - 0.5).slice(0,4)
      )
    }
    return () => {
      mounted = false
    }
  }, [products, category])

  return (
    <>
      <Typography variant='h4' gutterBottom>You may also like</Typography>
      <Grid container direction='row'>
        {reduced &&
          reduced.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
    </>
  )
}
