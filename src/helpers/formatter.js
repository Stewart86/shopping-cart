export const formatCurrency = (price) => {
  const formatter = new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    minimumFractionDigits: 2,
  })
  return formatter.format(price)
}
