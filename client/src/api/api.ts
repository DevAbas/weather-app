import axios from 'axios';

import { WeatherResponse, LocationResponse } from '../types';

const weatherAPI = 'https://creative-weather.herokuapp.com/meta-weather';

export async function fetchWeather(locationId: number) {
  const { data } = await axios.get<WeatherResponse>(
    `${weatherAPI}/location/${locationId}`
  );
  return data;
}

export async function fetchLocations(locationName: string) {
  const { data } = await axios.get<LocationResponse[]>(
    `${weatherAPI}/location/search?query=${locationName}`
  );
  return data;
}
