import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import { Register } from './pages/Register/'
import { Records } from './pages/Records/'
import { Validate } from './pages/Validate/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:cpf/registrar" component={Register} />
        <Route path="/:cpf/validar" component={Validate} />
        <Route path="/registros" component={Records} />
      </Switch>
    </Router>
  )
}

export default App
