const BASE_URL = "https://fakestoreapi.com/"

export const getAllProducts = async () => {
  const products = await fetch(BASE_URL + "products")
  return await products.json()
}

export const getProduct = async (id) => {
  const products = await fetch(BASE_URL + "products/" + id)
  return await products.json()
}
