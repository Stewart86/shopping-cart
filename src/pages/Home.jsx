import { Container, Grid, MenuItem, TextField } from "@material-ui/core"
import React, { useEffect } from "react"

import { Loading } from "../components/Loading"
import { ProductCard } from "../components/ProductCard"
import { getAllProducts } from "../api/product"
import { makeStyles } from "@material-ui/core"
import { useState } from "react"

const useStyles = makeStyles((theme) => ({
  searchBox: {
    marginTop: theme.spacing(2),
  },
}))

export const Home = () => {
  const classes = useStyles()
  const [products, setProducts] = useState(null)
  const [filtered, setFiltered] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("product")

  useEffect(() => {
    let mounted = true
    const products = async () => {
      if (mounted) {
        const dbProducts = await getAllProducts()
        setProducts(dbProducts)
        setFiltered(() =>
          dbProducts.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1
            }
            return 0
          })
        )
        setLoading(false)
      }
    }
    products()
    return () => {
      mounted = false
    }
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    if (value === "") {
      setFiltered(products)
    }
    setSearch(value)
    if (products) {
      setFiltered(() => {
        return products.filter((item) => {
          switch (sort) {
            case "product":
              return item.title.toLowerCase().includes(value.toLowerCase())

            case "price":
              return String(item.price).includes(value.toLowerCase())

            case "category":
              return item.category.toLowerCase().includes(value.toLowerCase())

            default:
              return null
          }
        })
      })
    }
  }

  const handleSort = (e) => {
    switch (e.target.value) {
      case "product":
        setFiltered((state) =>
          state.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
              return 1
            }
            return 0
          })
        )
        break
      case "price":
        setFiltered((state) => state.sort((a, b) => a.price - b.price))
        break

      case "category":
        setFiltered((state) =>
          state.sort((a, b) => {
            if (a.category.toLowerCase() < b.category.toLowerCase()) {
              return -1
            }
            if (a.category.toLowerCase() > b.category.toLowerCase()) {
              return 1
            }
            return 0
          })
        )
        break

      default:
        break
    }
    setSort(e.target.value)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <TextField
            className={classes.searchBox}
            fullWidth
            label='Search'
            value={search}
            variant={"outlined"}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            className={classes.searchBox}
            fullWidth
            select
            label='sort by'
            value={sort}
            onChange={handleSort}>
            <MenuItem value='product'>product</MenuItem>
            <MenuItem value='price'>price</MenuItem>
            <MenuItem value='category'>category</MenuItem>
          </TextField>
        </Grid>
        {filtered &&
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
    </Container>
  )
}
