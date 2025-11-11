import Image from 'next/image';
import WindAndHumidity from '../WindAndHumidity/WindAndHumidity';
import { WeatherIcon } from '@/app/utils/types';

interface CurrentWeatherProps {
  windSpeed: number;
  humidity: number;
  temperature: number;
  weatherIcon: WeatherIcon;
  city: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  windSpeed,
  humidity,
  temperature,
  weatherIcon,
  city,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={`/images/${weatherIcon}.svg`}
        alt="Current weather icon"
        width={220}
        height={220}
        className="-mt-10"
      />
      <h1 className="text-[7rem] font-bold -mt-20 text-foreground">
        {temperature}°C
      </h1>
      <p className="city -mt-4 mb-2">
        Showing weather for <b>{city}</b>
      </p>
      <WindAndHumidity windSpeed={windSpeed} humidity={humidity} />
    </div>
  );
};

export default CurrentWeather;
