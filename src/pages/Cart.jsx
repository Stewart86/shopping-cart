import { Add, Remove } from "@material-ui/icons"
import {
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core"
import { useContext, useState } from "react"

import { CartContext } from "../contexts/CartProvider"
import { CheckoutDialog } from "../components/CheckoutDialog"
import { Recommandation } from "../components/Recommandation"
import { Redirect } from "react-router"
import { calculateTotal } from "../helpers/calculation"
import { formatCurrency } from "../helpers/formatter"

const useStyles = makeStyles((theme) => ({
  button: {
    float: "right",
    margin: theme.spacing(2),
  },
  recommandation: {
    marginTop: theme.spacing(10),
  },
}))

export const Cart = () => {
  const classes = useStyles()
  const { addToCart, cartCount, cartItems, removeItem, clearCart } = useContext(
    CartContext
  )
  const [checkout, setCheckout] = useState(false)

  const handleCheckout = () => {
    setCheckout(true)
  }

  const handleClearCart = () => {
    setCheckout(false)
    clearCart()
  }
  if (cartCount === 0) {
    return <Redirect path='/' />
  }

  return (
    <Container>
      <Typography gutterBottom variant='h2' component='h1'>
        Shopping Cart
      </Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell></TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(cartItems).map((pid) => (
                <TableRow key={pid}>
                  <TableCell>{cartItems[pid].title}</TableCell>
                  <TableCell>
                    <IconButton
                      size='small'
                      color='secondary'
                      onClick={() => removeItem(pid)}>
                      <Remove />
                    </IconButton>
                    <IconButton
                      size='small'
                      color='primary'
                      onClick={() =>
                        addToCart(
                          pid,
                          cartItems[pid].title,
                          cartItems[pid].price
                        )
                      }>
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell>{cartItems[pid].quantity}</TableCell>
                  <TableCell>{formatCurrency(cartItems[pid].price)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Total</TableCell>
                <TableCell>
                  <b>{formatCurrency(calculateTotal(cartItems))}</b>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </Paper>
      <CheckoutDialog open={checkout} onClose={handleClearCart} />
      <div className={classes.recommandation}>
        <Recommandation />
      </div>
    </Container>
  )
}
