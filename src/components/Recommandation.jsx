import { Grid, Typography } from "@material-ui/core"
import { useContext, useEffect, useState } from "react"

import { ProductCard } from "./ProductCard"
import { ProductContext } from "../contexts/ProductProvider"

export const Recommandation = ({ category = null }) => {
  const [reduced, setReduced] = useState(null)

  const { products } = useContext(ProductContext)

  const getRandomCategory = (products) => {
    const categories = products
      .map((item) => item.category)
      .filter((v, i, a) => a.indexOf(v) === i)
    return categories[Math.floor(Math.random() * categories.length)]
  }
  useEffect(() => {
    if (products) {
      const filter = category || getRandomCategory(products)
      setReduced(() =>
        products
          .filter((item) => item.category === filter)
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
      )
    }
  }, [products, category])

  return (
    <>
      <Typography variant='h4' gutterBottom>
        You may also like
      </Typography>
      <Grid container direction='row'>
        {reduced &&
          reduced.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
    </>
  )
}
