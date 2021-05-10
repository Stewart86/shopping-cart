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
import { calculateTotal } from "../helpers/calculation"
import { formatCurrency } from "../helpers/formatter"
import { useContext } from "react"

export const Cart = () => {
  const { cartItems } = useContext(CartContext)

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
          {Object.keys(cartItems).map((pid) => (
            <TableRow key={cartItems[pid].id}>
              <TableCell>{cartItems[pid].title}</TableCell>
              <TableCell>{formatCurrency(cartItems[pid].price)}</TableCell>
              <TableCell>{cartItems[pid].quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{formatCurrency(calculateTotal(cartItems))}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
