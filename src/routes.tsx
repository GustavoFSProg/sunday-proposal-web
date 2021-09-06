import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Register from './pages/Register/Register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}
