import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Header from './components/Header'
import './App.less'

function App() {

  return (
      <Router>
          <div>
              <Header/>
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/details/:id" component={Details} />
              </Switch>
          </div>
      </Router>
);
}

export default App;
