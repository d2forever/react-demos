import React, { useState } from 'react';

import DevideHeader from '../../common/DevideHeader';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';

const RIKKEI_POST = "/";
const items = [
  {title: 'Title 01', content: 'Content 01'},
  {title: 'Title 02', content: 'Content 02'},
  {title: 'Title 03', content: 'Content 03'},
  {title: 'Title 04', content: 'Content 04'}
];
const OPTIONS = [
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

const App = () => {
  const [selected, setSelected] = useState(OPTIONS[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container comments">
      <DevideHeader post_path={RIKKEI_POST} />
      <br />
      <Accordion items={items} />
      <br />
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
      {showDropdown && <Dropdown
        options={OPTIONS}
        selected={selected}
        onSelectedChange={setSelected}
      />}
      <br />
      <Search />
    </div>
  )
}

export default App;
