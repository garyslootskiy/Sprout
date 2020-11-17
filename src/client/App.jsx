import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './containers/DashboardContainer';
import Login from './containers/LoginContainer';

library.add(faPlus);

const App = () => {
  // Enable isLoggedIn for development
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="app-container">
      {isLoggedIn ? (
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            {/* <Route exact path='/search' component={} /> */}
            {/* <Route exact path='/camera' component={} /> */}
            {/* <Route exact path='/message' component={} /> */}
            {/* <Route exact path='/profile' component={} /> */}
            <Route path="*" render={() => <h1>404 - Page Not Found</h1>} />
          </Switch>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
