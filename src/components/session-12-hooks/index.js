import React, { useState } from 'react';
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';

import DevideHeader from '../../common/DevideHeader';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';
import Header from './Header';

const RIKKEI_POST = "/";
const items = [
  {title: 'Title 01', content: 'Content 01'},
  {title: 'Title 02', content: 'Content 02'},
  {title: 'Title 03', content: 'Content 03'},
  {title: 'Title 04', content: 'Content 04'}
];
const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Green',
    value: 'green'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  }
];

const Topic = () => {
  let { topicName } = useParams();

  return (
    <div>{topicName}</div>
  )
};

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const { path } = useRouteMatch();

  return (
    <div className="ui container comments">
      <DevideHeader post_path={RIKKEI_POST} />
      <Header url={path} />
      <Switch>
        <Route exact path={path}>
          <Accordion items={items} />
        </Route>
        <Route exact path={`${path}/list`} component={Search} />
        <Route exact path={`${path}/dropdown`}>
          <Dropdown
            label="Select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route exact path={`${path}/translate`} component={Translate} />
      </Switch>
    </div>
  )
}

export default App;
