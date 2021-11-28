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
  id: Number;
  weather_state_name: String;
  weather_state_abbr: WeatherStates;
  wind_direction_compass: String;
  applicable_date: Date;
  // Unit: centigrade
  min_temp: Number;
  // Unit: centigrade
  max_temp: Number;
  // Unit: centigrade
  the_temp: Number;
  // Unit: mph
  wind_speed: Number;
  // Unit: degrees
  wind_direction: Number;
  // Unit: mbar
  air_pressure: Number;
  // Unit: percentage
  humidity: Number;
  visibility: Number;
  // Unit: percentage
  predictability: Number;
}

export interface WeatherResponse {
  title: String;
  location_type: String;
  woeid: Number;
  latt_long: String;
  time: String;
  consolidated_weather: ConsolidatedWeather[];
}

export interface LocationResponse {
  title: String;
  location_type: String;
  woeid: Number;
  latt_long: String;
}
