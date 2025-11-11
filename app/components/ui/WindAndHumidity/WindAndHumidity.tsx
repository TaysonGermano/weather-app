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
    >
      <div className="flex gap-2">
        <Wind />
        {windSpeed} km/h
      </div>
      <div className="flex gap-2">
        <Droplet />
        {humidity}%
      </div>
    </div>
  );
};

export default WindAndHumidity;
