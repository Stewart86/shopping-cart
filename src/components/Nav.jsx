import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"

import { CartContext } from "../contexts/CartProvider"
import React from "react"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core"
import { useContext } from "react"
import { useHistory } from "react-router"

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

export const Nav = () => {
  const classes = useStyles()
  const history = useHistory()
  const { cartCount } = useContext(CartContext)
  const handleCart = () => {
    history.push("/cart")
  }
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Lasada
        </Typography>
        <IconButton color='inherit' onClick={handleCart}>
          <Badge badgeContent={cartCount}>
            <ShoppingBasketOutlined color='inherit' />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
