import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://api-football-beta.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "a695823fa2mshf88cf4a5b363fbbp1da57ajsnae3c291c8f0b",
    "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  },
});
