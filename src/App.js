import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Layouts/Navbar";
import NotFound from "./components/Pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from "./components/Users/AddUser";
import EditUser from "./components/Users/EditUser";
import ViewUser from './components/Users/ViewUser';
import ApiError from './components/Pages/ApiError'



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
         <Switch>

 
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/student/add" exact component={AddUser}></Route>
        <Route path="/student/edit/:email1" exact component={EditUser}></Route>
        <Route path="/student/view/:email" exact component={ViewUser}></Route>
        <Route path="/apierror" exact component={ApiError}></Route>
        <Route component={NotFound}></Route>
      </Switch> 

      </div>
    </Router>
  );
}

export default App;
