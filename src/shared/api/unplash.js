import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID eWoYQuDqo1n6kl_yCWBwcUlNEbWKs7RrvdmGFuIpC3g'
  }
});
