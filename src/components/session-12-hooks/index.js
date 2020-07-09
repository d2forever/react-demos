import React from 'react';

import DevideHeader from '../../common/DevideHeader';
import Accordion from './Accordion';
import Search from './Search';

const RIKKEI_POST = "/";
const items = [
  {title: 'Title 01', content: 'Content 01'},
  {title: 'Title 02', content: 'Content 02'},
  {title: 'Title 03', content: 'Content 03'},
  {title: 'Title 04', content: 'Content 04'}
]

const App = () => {
  return (
    <div className="ui container comments">
      <DevideHeader post_path={RIKKEI_POST} />
      <br />
      <Accordion items={items} />
      <br />
      <Search />
    </div>
  )
}

export default App;
