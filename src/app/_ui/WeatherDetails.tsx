'use client';
import DayWeatherInfoCard from '@/components/ui/DayWeatherInfoCard/DayWeatherInfoCard';
import { WeatherIcon } from '@/utils/types';
import CurrentWeather from '@/components/ui/CurrentWeather/CurrentWeather';
import RefreshBtn from '@/components/ui/RefreshBtn/RefreshBtn';
import useGetCurrentWeather from '@/hooks/useGetCurrentWeather';
import Skeleton from './Skeleton';
import { THIS_WEEK_WEATHER_DATA } from '@/utils/contants';

export default function WeatherDetails() {
  const { isLoading, error, data } = useGetCurrentWeather();

  if (isLoading) return <Skeleton />;
  if (error) {
    // error will be handled by the error component in the parent route
    throw error;
  }

  return (
    <div className="weather-info min-h-screen space-y-12 flex flex-col items-center justify-center">
      <RefreshBtn className="ml-auto" />
      <section className="current-weather">
        <CurrentWeather
          windSpeed={data.wind.speed}
          humidity={data.main.humidity}
          temperature={data.main.temp}
          weatherIcon={data.weather[0].main.toLowerCase() as WeatherIcon}
          city={data.name}
        />
      </section>
      <section className="week-weather grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {/* Note: I just thought of adding this here for illustration purposes */}
        {/* if I had to get a whole week of weather data :) */}
        {THIS_WEEK_WEATHER_DATA.map((dayData) => (
          <DayWeatherInfoCard
            key={dayData.day}
            day={dayData.day}
            maxTemp={dayData.maxTemp}
            minTemp={dayData.minTemp}
            weatherIcon={dayData.weatherIcon}
          />
        ))}
      </section>
    </div>
  );
}
