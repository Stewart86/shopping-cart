import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core"

import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
  media: {
    height: 300,
  },
}))

export const ProductCard = ({ product }) => {
  const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h1'>
              {product.title}
            </Typography>
            <Typography>{product.price}</Typography>
            <Typography>{product.category}</Typography>
            <Typography>{product.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' variant="contained" color='primary'>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
