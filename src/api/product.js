const BASE_URL = "https://fakestoreapi.com/"

export const getProducts = async () => {
  const products = await fetch(BASE_URL + "products")
  return await products.json()
}
