import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core"

import React from "react"
import { formatCurrency } from "../helpers/formatter"
import { makeStyles } from "@material-ui/core"
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  actionArea: { height: 400 },
  title: {
    width: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  media: { height: "70%", objectFit: "cover" },
}))

export const ProductCard = ({ product }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = (id) => {
    history.push(`/product/${id}`)
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.actionArea}
          onClick={(e) => handleClick(product.id)}>
          <CardMedia
            className={classes.media}
            component='img'
            src={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography className={classes.title} variant='h6' component='h2'>
              {product.title}
            </Typography>
            <Typography variant='h5' color='primary'>
              {formatCurrency(product.price)}
            </Typography>
            <Typography variant='subtitle2'>
              category: {product.category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
