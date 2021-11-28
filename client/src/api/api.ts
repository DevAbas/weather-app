import axios from 'axios';

import { WeatherResponse } from '../types';

const weatherAPI = 'http://localhost:4000/meta-weather';

export async function fetchWeather(locationId: Number) {
  const { data } = await axios.get<WeatherResponse>(
    `${weatherAPI}/location/${locationId}`
  );
  return data;
}
