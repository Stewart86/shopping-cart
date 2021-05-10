export const calculateTotal = (cartItems) => {
  if (Object.keys(cartItems).length === 0) {
    return 0
  }
  return Object.keys(cartItems)
    .map((id) => cartItems[id].quantity * Number(cartItems[id].price))
    .reduce((a, b) => a + b)
}
