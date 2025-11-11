import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';
import { WeatherIcon } from '@/utils/types';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock WindAndHumidity component
jest.mock('../WindAndHumidity/WindAndHumidity', () => ({
  __esModule: true,
  default: ({
    windSpeed,
    humidity,
  }: {
    windSpeed: number;
    humidity: number;
  }) => (
    <div data-testid="wind-and-humidity">
      Wind: {windSpeed} km/h, Humidity: {humidity}%
    </div>
  ),
}));

describe('CurrentWeather', () => {
  const defaultProps = {
    windSpeed: 15.5,
    humidity: 65.8,
    temperature: 22.7,
    weatherIcon: 'sunny' as WeatherIcon,
    city: 'London',
  };

  it('renders current weather information container', () => {
    render(<CurrentWeather {...defaultProps} />);

    expect(
      screen.getByLabelText('Current weather information'),
    ).toBeInTheDocument();
  });

  it('renders weather icon with correct src', () => {
    render(<CurrentWeather {...defaultProps} />);

    const image = screen.getByAltText('Current weather icon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/sunny.svg');
  });

  it('displays temperature floored to nearest integer', () => {
    render(<CurrentWeather {...defaultProps} />);

    const temperature = screen.getByLabelText('Current temperature');
    expect(temperature).toHaveTextContent('22°C');
  });

  it('displays city name correctly', () => {
    render(<CurrentWeather {...defaultProps} />);

    const cityElement = screen.getByLabelText('City name');
    expect(cityElement).toHaveTextContent('Showing weather for London');
  });

  it('renders WindAndHumidity component with correct props', () => {
    render(<CurrentWeather {...defaultProps} />);

    const windAndHumidity = screen.getByTestId('wind-and-humidity');
    expect(windAndHumidity).toHaveTextContent(
      'Wind: 15.5 km/h, Humidity: 65.8%',
    );
  });

  it('handles different weather icons', () => {
    render(<CurrentWeather {...defaultProps} weatherIcon="rain" />);

    const image = screen.getByAltText('Current weather icon');
    expect(image).toHaveAttribute('src', '/images/rain.svg');
  });

  it('handles different cities', () => {
    render(<CurrentWeather {...defaultProps} city="New York" />);

    const cityElement = screen.getByLabelText('City name');
    expect(cityElement).toHaveTextContent('Showing weather for New York');
  });

  it('floors temperature correctly for values close to next integer', () => {
    render(<CurrentWeather {...defaultProps} temperature={19.9} />);

    const temperature = screen.getByLabelText('Current temperature');
    expect(temperature).toHaveTextContent('19°C');
  });

  it('handles negative temperatures', () => {
    render(<CurrentWeather {...defaultProps} temperature={-5.3} />);

    const temperature = screen.getByLabelText('Current temperature');
    expect(temperature).toHaveTextContent('-6°C');
  });

  it('handles zero temperature', () => {
    render(<CurrentWeather {...defaultProps} temperature={0} />);

    const temperature = screen.getByLabelText('Current temperature');
    expect(temperature).toHaveTextContent('0°C');
  });

  it('passes correct wind speed to WindAndHumidity', () => {
    render(<CurrentWeather {...defaultProps} windSpeed={25.3} />);

    const windAndHumidity = screen.getByTestId('wind-and-humidity');
    expect(windAndHumidity).toHaveTextContent('Wind: 25.3 km/h');
  });

  it('passes correct humidity to WindAndHumidity', () => {
    render(<CurrentWeather {...defaultProps} humidity={80.5} />);

    const windAndHumidity = screen.getByTestId('wind-and-humidity');
    expect(windAndHumidity).toHaveTextContent('Humidity: 80.5%');
  });
});
