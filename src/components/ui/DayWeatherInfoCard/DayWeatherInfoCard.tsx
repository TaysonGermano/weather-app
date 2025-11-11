import Image from 'next/image';
import Card from '../Card/Card';
import { DaysOfWeek, WeatherIcon } from '@/utils/types';

interface DayWeatherInfoCardProps {
  day: DaysOfWeek;
  maxTemp: number;
  minTemp: number;
  weatherIcon: WeatherIcon;
}

const DayWeatherInfoCard: React.FC<DayWeatherInfoCardProps> = ({
  day,
  maxTemp,
  minTemp,
  weatherIcon = 'sunny',
}) => {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <span className="text-foreground-secondary font-medium">{day}</span>
        <Image
          src={`/images/${weatherIcon}.svg`}
          alt={`${day} weather icon`}
          width={80}
          height={80}
          loading="eager"
        />
        <div className="flex space-x-4" aria-label="Temperature range">
          <span
            className="text-foreground font-semibold"
            aria-label="Maximum temperature"
          >
            {maxTemp}°C
          </span>
          <span
            className="text-foreground-muted"
            aria-label="Minimum temperature"
          >
            {minTemp}°C
          </span>
        </div>
      </div>
    </Card>
  );
};

export default DayWeatherInfoCard;
