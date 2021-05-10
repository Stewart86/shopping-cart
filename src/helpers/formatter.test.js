import { formatCurrency } from "./formatter"

test("formatCurrency should convert Number() to currency format", () => {
  expect(formatCurrency(1)).toBe("$1.00")
  expect(formatCurrency(1000)).toBe("$1,000.00")
})
