import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register/Register'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}
