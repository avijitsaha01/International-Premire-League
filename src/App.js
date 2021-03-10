import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import League from './components/League/League';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
    
      <Header></Header>
      <div className="container">
        <div className="row">
        <Switch>
          <Route exact path="/">
          <League></League>
          <League></League>
          <League></League>
          </Route>
          <Route path="/details">
          <LeagueDetail></LeagueDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        </div>
      </div>
        <Footer></Footer>
    </div>
      

    </Router>
  );
}

export default App;
