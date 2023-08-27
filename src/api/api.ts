// const axios = require('axios');
//
// const options = {
//   method: 'GET',
//   url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
//   params: {
//     category: 'shooter',
//   },
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
//   },
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

import axios from 'axios';

const request = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  },
  responseType: 'json',
})

export default request
