import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"
import { Register } from './pages/Register/'
import { Records } from './pages/Records/'
import { Validate } from './pages/Validate/'
import { Home } from './pages/Home/'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/registrar" component={Register} />
        <Route path="/:cpf/registrar" component={Register} />
        <Route path="/:cpf/validar" component={Validate} />
        <Route path="/registros" component={Records} />
      </Switch>
      <ToastContainer />
    </Router>
  )
}

export default App
