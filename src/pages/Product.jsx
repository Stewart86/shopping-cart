import React from "react"
import { useParams } from "react-router"

export const Product = () => {
  let { id } = useParams()
  return <div>Product {id}</div>
}
