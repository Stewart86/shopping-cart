import {
  AppBar,
  Badge,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { HomeOutlined, ShoppingCartOutlined } from "@material-ui/icons"

import { CartContext } from "../contexts/CartProvider"
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

  return (
    <AppBar position='sticky'>
      <Container>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Shopda Mall
          </Typography>
          <IconButton color='inherit' onClick={() => history.push("/")}>
            <HomeOutlined />
          </IconButton>
          <IconButton
            disabled={cartCount === 0}
            color='inherit'
            onClick={() => history.push("/cart")}>
            <Badge badgeContent={cartCount} color='secondary'>
              <ShoppingCartOutlined color='inherit' />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
