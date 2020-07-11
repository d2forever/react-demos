import React from 'react';

import HandleFormsEvents from './HandleFormsEvents';
import { useAxiosHOC } from '../../shared/api/axios-hoc';

const BASE_URL = 'https://api.unsplash.com';
const AUTHORIZATION = 'Client-ID eWoYQuDqo1n6kl_yCWBwcUlNEbWKs7RrvdmGFuIpC3g';
const WithAxiosHOCComponent = useAxiosHOC(BASE_URL, AUTHORIZATION)(HandleFormsEvents);

const App = () => {
  return (
    <div className="ui container comments">
      <WithAxiosHOCComponent />
    </div>
  );
}

export default App;
