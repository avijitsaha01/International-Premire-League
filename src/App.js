import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faLaptop } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
import League from './components/League/League';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <League></League>
          <League></League>
          <League></League>
        </div>
        <LeagueDetail></LeagueDetail>
      </div>
      <br/>
    </div>
  );
}

export default App;
