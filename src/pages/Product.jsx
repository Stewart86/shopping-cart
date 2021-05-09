import { Button, Container, Paper, Typography } from "@material-ui/core"

import React from "react"
import { getProduct } from "../api/product"
import { makeStyles } from "@material-ui/core"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  contentWrapper: {
    padding: theme.spacing(2),
  },
}))

export const Product = () => {
  const classes = useStyles()
  const [product, setProduct] = useState(null)

  let { id } = useParams()

  useEffect(() => {
    const productApi = async (id) => {
      setProduct(await getProduct(id))
    }
    productApi(id)
  }, [id])

  if (!product) {
    return null
  }
  return (
    <Container>
      <Paper className={classes.root}>
        <img src={product.image} alt={product.title} />
        <div className={classes.contentWrapper}>
          <Typography variant='h2'>{product.title}</Typography>
          <Typography>{product.category}</Typography>
          <Typography>{product.description}</Typography>
          <Typography>{product.price}</Typography>
          <Button>Add to Cart</Button>
        </div>
      </Paper>
    </Container>
  )
}
