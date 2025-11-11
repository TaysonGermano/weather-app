export type WeatherIcon =
  | 'atmosphere'
  | 'clear'
  | 'clouds'
  | 'drizzle'
  | 'rain'
  | 'snow'
  | 'thunderstorm';

export type DaysOfWeek = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

export interface DailyWeatherDataType {
  day: DaysOfWeek;
  maxTemp: number;
  minTemp: number;
  weatherIcon: WeatherIcon;
}
