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
import { useEffect, useState } from 'react';

function App() {

  const [Leagues, setLeagues] = useState([]);

  useEffect(() => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
  }, [])
  const [LeagueDetails, setLeagueDetails] = useState({});
  return (
    <Router>
      <div className="App">
        <Header LeagueDetails={LeagueDetails}></Header>
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path="/">
                {
                  Leagues.slice(0, 12).map(data => <League data={data}></League>)
                }
              </Route>
              <Route path="/details/:id">
                <LeagueDetail LeagueDetails={LeagueDetails} setLeagueDetails={setLeagueDetails}></LeagueDetail>
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
