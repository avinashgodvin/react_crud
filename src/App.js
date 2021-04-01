
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Navbar from "./components/Layouts/Navbar"
import NotFound from './components/Pages/NotFound'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route component={NotFound}></Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
