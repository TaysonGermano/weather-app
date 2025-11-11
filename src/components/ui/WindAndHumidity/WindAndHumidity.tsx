import { Droplet, Wind } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface WindAndHumidityProps {
  className?: string;
  windSpeed: number;
  humidity: number;
}

const WindAndHumidity: React.FC<WindAndHumidityProps> = ({
  className,
  windSpeed,
  humidity,
}) => {
  return (
    <div
      className={twMerge(
        'more-details text-foreground-secondary flex gap-4',
        className,
      )}
      aria-label="Wind and humidity information"
    >
      <div className="flex gap-2" aria-label="Wind speed">
        <Wind aria-hidden="true" />
        {Math.floor(windSpeed)} km/h
      </div>
      <div className="flex gap-2" aria-label="Humidity">
        <Droplet aria-hidden="true" />
        {Math.floor(humidity)}%
      </div>
    </div>
  );
};

export default WindAndHumidity;
