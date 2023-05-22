import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import StationsMap from './components/stationMap';
import JourneysPage from './components/journeys';
import StationsPage from './components/stations';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="header"> 
        <nav className="navbar"> 
          <ul>
            <li>
              <a href="/index">Home</a>
            </li>
            <li>
              <a href="/stations">Stations</a>
            </li>
            <li>
              <a href="/journeys">Journeys</a>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path="/index" component={StationsMap} />
        <Route exact path="/stations" component={StationsPage} />
        <Route exact path="/journeys" component={JourneysPage} />
        <Redirect from="/" to="/index" />
      </Switch>
    </Router>
  );
}

export default App;
