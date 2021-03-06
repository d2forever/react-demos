import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import StaticPage from './StaticPage';
import Session3Components from './components/session-3-components';
import Session3ComponentsPropsChildren from './components/session-3-components-props-children';
import Session3ComponentsPropsChildrenAdvance from './components/session-3-components-props-children-advance';
import Session4Seasons from './components/session-4-seasons';
import Session7FormsEvents01 from './components/session-7-handle-forms-events-01';
import Session7FormsEvents02 from './components/session-7-handle-forms-events-02';
import Session7FormsEvents03 from './components/session-7-handle-forms-events-03';
import Session7FormsEvents04 from './components/session-7-handle-forms-events-04';
import Session7FormsEvents05 from './components/session-7-handle-forms-events-05';
import Session7FormsEvents06 from './components/session-7-handle-forms-events-06';
import Session17Songs from './components/session-17-songs';
import Session11Videos from './components/session-11-videos';
import Session12Hooks from './components/session-12-hooks';
import Session18ReduxThunk from './components/session-18-redux-thunk';
import Search from './components/session-12-hooks/Search';
import DokkaiRenshu from './components/dokkai-no-renshu';
import AxiosRetry from './components/axios-retry';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StaticPage} />
        <Route
          exact
          path="/session-3-components"
          component={Session3Components}
        />
        <Route
          exact
          path="/session-3-components-props-children"
          component={Session3ComponentsPropsChildren}
        />
        <Route
          exact
          path="/session-3-components-props-children-advance"
          component={Session3ComponentsPropsChildrenAdvance}
        />
        <Route exact path="/session-4-seasons" component={Session4Seasons} />
        <Route
          exact
          path="/session-7-forms-events-01"
          component={Session7FormsEvents01}
        />
        <Route
          exact
          path="/session-7-forms-events-02"
          component={Session7FormsEvents02}
        />
        <Route
          exact
          path="/session-7-forms-events-03"
          component={Session7FormsEvents03}
        />
        <Route
          exact
          path="/session-7-forms-events-04"
          component={Session7FormsEvents04}
        />
        <Route
          exact
          path="/session-7-forms-events-05"
          component={Session7FormsEvents05}
        />
        <Route
          exact
          path="/session-7-forms-events-06"
          component={Session7FormsEvents06}
        />
        <Route exact path="/session-17-songs" component={Session17Songs} />
        <Route exact path="/session-11-videos" component={Session11Videos} />
        <Route
          exact
          path="/session-18-redux-thunks"
          component={Session18ReduxThunk}
        />
        <Route path="/session-12-hooks" component={Session12Hooks} />
        <Route path="/renshuu" component={DokkaiRenshu} />
        <Route path="/axios-retry" component={AxiosRetry} />
      </Switch>
    </Router>
  );
};

export default App;
