import { Button, Container, Grid, Paper, Typography } from "@material-ui/core"

import { CartContext } from "../contexts/CartProvider"
import { Loading } from "../components/Loading"
import { Recommandation } from "../components/Recommandation"
import { formatCurrency } from "../helpers/formatter"
import { getProduct } from "../api/product"
import { grey } from "@material-ui/core/colors"
import { makeStyles } from "@material-ui/core"
import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: { maxWidth: "100%", padding: theme.spacing(3) },
  details: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  contentWrapper: {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  category: { color: grey[500] },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(3),
  },
  recomWrapper: {
    marginTop: theme.spacing(2),
  },
}))

export const Product = () => {
  const classes = useStyles()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { addToCart } = useContext(CartContext)
  let { id } = useParams()

  useEffect(() => {
    const productApi = async (id) => {
      setProduct(await getProduct(id))
      setLoading(false)
    }
    productApi(id)
  }, [id])

  const handleAddToCart = () => {
    addToCart(product.id, product.title, product.price)
  }

  if (loading || !product) {
    return <Loading />
  }
  return (
    <Container>
      <Paper className={classes.root}>
        <Grid container direction='row'>
          <Grid className={classes.imageContainer} item sm={12} md={6}>
            <img
              className={classes.image}
              src={product.image}
              alt={product.title}
            />
          </Grid>
          <Grid className={classes.details} item sm={12} md={6}>
            <div className={classes.contentWrapper}>
              <Typography variant='h3' component='h1'>
                {product.title}
              </Typography>
              <Typography
                className={classes.category}
                gutterBottom
                variant='subtitle1'>
                category: {product.category}
              </Typography>
              <Typography paragraph variant='body1'>
                {product.description}
              </Typography>
            </div>
            <div className={classes.footer}>
              <Typography variant='h4' color='primary'>
                {formatCurrency(product.price)}
              </Typography>
              <Button
                onClick={handleAddToCart}
                variant='contained'
                color='primary'>
                Add to Cart
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.recomWrapper}>
        <Recommandation category={product.category} key={product.id} />
      </div>
    </Container>
  )
}
