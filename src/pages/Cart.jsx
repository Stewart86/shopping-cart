import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"

import { CartContext } from "../contexts/CartProvider"
import React from "react"
import { useContext } from "react"

export const Cart = () => {
  const { cartItems } = useContext(CartContext)

  const calculateTotal = () => {
      if (cartItems.length === 0) {
          return 0.
      }
    const total = cartItems
      .map((product) => Number(product.price))
      .reduce((a, b) => a + b)
    return total
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems &&
            cartItems.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>${calculateTotal()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
