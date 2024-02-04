import axios from "axios";

export default axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apiKey: '59c517d1'
  }
})
