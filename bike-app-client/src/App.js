import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import stationsMap from './components/stationMap';
import journeysPage from './components/journeys';
import stationsPage from './components/stations';
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
        <Route exact path="/stations" component={stationsPage} />
        <Route exact path="/journeys" component={journeysPage} />
        <Redirect from="/" to="/index" />
      </Switch>
    </Router>
  );
}

export default App;
