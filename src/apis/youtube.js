import axios from 'axios';

const KEY = 'AIzaSyDR195F1zDI2MuhCAyxWDh-rLx8JndGFoE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});


