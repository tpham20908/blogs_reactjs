import axios from "axios";
import { FETCH_WEATHER } from "./types";

const API_KEY = "a2cc469ef8f6b9c326aeb4f98c875cdd";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}