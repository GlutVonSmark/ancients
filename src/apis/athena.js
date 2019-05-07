import axios from 'axios';

export default axios.create({
  baseURL: 'https://athena-7.herokuapp.com/ancients.json'
});
