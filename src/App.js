//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portafolio from './pages/portafolio';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Certificado from './pages/Certificado';
function App() {
  return (
    <Router>
      <Switch>
    <Route path="/portafolio">
          <Portafolio />
        </Route>
    <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/certificado">
          <Certificado />
        </Route>
    <Route path="*">
          <Error404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
