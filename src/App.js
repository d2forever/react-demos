import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import StaticPage from './StaticPage';
import Session3Components from './components/session-3-components';
import Session3ComponentsPropsChildren from './components/session-3-components-props-children';
import Session4Seasons from './components/session-4-seasons';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StaticPage} />
        <Route exact path="/session-3-components" component={Session3Components} />
        <Route exact path="/session-3-components-props-children" component={Session3ComponentsPropsChildren} />
        <Route exact path="/session-4-seasons" component={Session4Seasons} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
