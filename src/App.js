import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import { Cart } from "./pages/Cart"
import { CartProvider } from "./contexts/CartProvider"
import { CssBaseline } from "@material-ui/core"
import { Home } from "./pages/Home"
import { Nav } from "./components/Nav"
import { NotFound } from "./pages/NotFound"
import { Product } from "./pages/Product"
import { ProductProvider } from "./contexts/ProductProvider"
import { ThemeProvider } from "./contexts/ThemeProvider"

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <CssBaseline />
            <Nav />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/product/:id'>
                <Product />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </ProductProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App
