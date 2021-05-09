import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import { Cart } from "./pages/Cart"
import { CssBaseline } from "@material-ui/core"
import { Home } from "./pages/Home"
import { Nav } from "./components/Nav"
import { NotFound } from "./pages/NotFound"
import { Product } from "./pages/Product"

function App() {
  return (
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
  )
}

export default App
