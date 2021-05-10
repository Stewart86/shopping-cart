import { calculateTotal } from "./calculation"

test("calculateTotal should calculate price with different quantities", () => {
  const cartItems = {
    1: { title: "test-item-1", quantity: 1, price: 1 },
    2: { title: "test-item-1", quantity: 2, price: 1 },
  }
  expect(calculateTotal(cartItems)).toBe(3)
})
