import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core"

import React from "react"
import { ShoppingBasketOutlined } from "@material-ui/icons"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}))

export const Nav = () => {
  const classes = useStyles()
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Lasada
        </Typography>
        <IconButton>
          <ShoppingBasketOutlined color='inherit' />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
