import { render, screen } from '@testing-library/react';
import DayWeatherInfoCard from './DayWeatherInfoCard';
import { WeatherIcon } from '@/utils/types';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ComponentProps<'img'>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('DayWeatherInfoCard', () => {
  const defaultProps = {
    day: 'Mon' as const,
    maxTemp: 25,
    minTemp: 15,
    weatherIcon: 'sunny' as WeatherIcon,
  };

  it('renders the day name', () => {
    render(<DayWeatherInfoCard {...defaultProps} />);

    expect(screen.getByText('Mon')).toBeInTheDocument();
  });

  it('renders the card with correct aria-label', () => {
    render(<DayWeatherInfoCard {...defaultProps} />);

    expect(screen.getByRole('article', { name: 'card' })).toBeInTheDocument();
  });

  it('renders weather icon with correct src and alt text', () => {
    render(<DayWeatherInfoCard {...defaultProps} />);

    const image = screen.getByAltText('Mon weather icon');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/sunny.svg');
  });

  it('displays maximum temperature', () => {
    render(<DayWeatherInfoCard {...defaultProps} />);

    const maxTemp = screen.getByLabelText('Maximum temperature');
    expect(maxTemp).toHaveTextContent('25°C');
  });

  it('displays minimum temperature', () => {
    render(<DayWeatherInfoCard {...defaultProps} />);

    const minTemp = screen.getByLabelText('Minimum temperature');
    expect(minTemp).toHaveTextContent('15°C');
  });

  it('renders temperature range container', () => {
    render(<DayWeatherInfoCard {...defaultProps} />);

    expect(screen.getByLabelText('Temperature range')).toBeInTheDocument();
  });

  it('handles different weather icons', () => {
    render(<DayWeatherInfoCard {...defaultProps} weatherIcon="rain" />);

    const image = screen.getByAltText('Mon weather icon');
    expect(image).toHaveAttribute('src', '/images/rain.svg');
  });

  it('handles different days of the week', () => {
    render(<DayWeatherInfoCard {...defaultProps} day="Fri" />);

    expect(screen.getByText('Fri')).toBeInTheDocument();
  });

  it('handles negative temperatures', () => {
    render(<DayWeatherInfoCard {...defaultProps} maxTemp={-5} minTemp={-15} />);

    expect(screen.getByLabelText('Maximum temperature')).toHaveTextContent(
      '-5°C',
    );
    expect(screen.getByLabelText('Minimum temperature')).toHaveTextContent(
      '-15°C',
    );
  });

  it('handles zero temperatures', () => {
    render(<DayWeatherInfoCard {...defaultProps} maxTemp={0} minTemp={0} />);

    expect(screen.getByLabelText('Maximum temperature')).toHaveTextContent(
      '0°C',
    );
    expect(screen.getByLabelText('Minimum temperature')).toHaveTextContent(
      '0°C',
    );
  });
});
