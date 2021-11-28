import { WeatherStates } from '../../types';
import * as icons from '../UI/SVG/images';

type WeatherIconProps = {
  weatherState: WeatherStates;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({
  weatherState,
}: WeatherIconProps) => {
  switch (weatherState) {
    case WeatherStates.HeavyCloud:
      return <icons.WeatherHeavyCloud />;
    case WeatherStates.Hail:
      return <icons.WeatherHeal />;
    case WeatherStates.HeavyRain:
      return <icons.WeatherHeavyRain />;
    case WeatherStates.LightCloud:
      return <icons.WeatherLightCloud />;
    case WeatherStates.LightRain:
      return <icons.WeatherLightRain />;
    case WeatherStates.Showers:
      return <icons.WeatherShowers />;
    case WeatherStates.Sleet:
      return <icons.WeatherSleet />;
    case WeatherStates.Thunderstorm:
      return <icons.WeatherThunderStorm />;
    case WeatherStates.Clear:
      return <icons.WeatherClear />;
    case WeatherStates.Snow:
      return <icons.WeatherSnow />;
    default:
      return null;
  }
};

export default WeatherIcon;
