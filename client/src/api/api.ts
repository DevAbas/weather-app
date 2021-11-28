import axios from 'axios';

import { WeatherResponse } from '../types';

const weatherAPI = 'https://www.metaweather.com/api';

export async function fetchWeather(locationId: Number) {
  const { data } = await axios.get<WeatherResponse>(
    `${weatherAPI}/location/${locationId}`
  );
  return data;
}
