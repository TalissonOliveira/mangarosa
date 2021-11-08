import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Register } from './pages/Register/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:cpf/registrar" component={Register} />
      </Switch>
    </Router>
  )
}

export default App
