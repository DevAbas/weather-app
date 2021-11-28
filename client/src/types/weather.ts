export enum WeatherStates {
  Snow = 'sn',
  Sleet = 'sl',
  Hail = 'h',
  Thunderstorm = 't',
  HeavyRain = 'hr',
  LightRain = 'lr',
  Showers = 's',
  HeavyCloud = 'hc',
  LightCloud = 'lc',
  Clear = 'c',
}

interface ConsolidatedWeather {
  id: number;
  weather_state_name: string;
  weather_state_abbr: WeatherStates;
  wind_direction_compass: string;
  applicable_date: Date;
  // Unit: centigrade
  min_temp: number;
  // Unit: centigrade
  max_temp: number;
  // Unit: centigrade
  the_temp: number;
  // Unit: mph
  wind_speed: number;
  // Unit: degrees
  wind_direction: number;
  // Unit: mbar
  air_pressure: number;
  // Unit: percentage
  humidity: number;
  visibility: number;
  // Unit: percentage
  predictability: number;
}

export interface WeatherResponse {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
  time: string;
  consolidated_weather: ConsolidatedWeather[];
}

export interface LocationResponse {
  title: string;
  location_type: string;
  woeid: number;
  latt_long: string;
}
