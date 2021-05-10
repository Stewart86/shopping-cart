import { calculateTotal } from "./calculation"

test("calculateTotal should calculate price with different quantities", () => {
  const cartItems = {
    1: { title: "test-item-1", quantity: 1, price: 1 },
    2: { title: "test-item-2", quantity: 2, price: 1 },
    3: { title: "test-item-3", quantity: 2, price: 1 },
    4: { title: "test-item-4", quantity: 1, price: 1 },
    5: { title: "test-item-5", quantity: 1, price: 800 },
  }
  expect(calculateTotal(cartItems)).toBe(806)
})
