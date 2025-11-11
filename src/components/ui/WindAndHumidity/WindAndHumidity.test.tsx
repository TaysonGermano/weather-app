import { render, screen } from '@testing-library/react';
import WindAndHumidity from './WindAndHumidity';

describe('WindAndHumidity', () => {
  const defaultProps = {
    windSpeed: 15.5,
    humidity: 65.8,
  };

  it('renders wind and humidity information', () => {
    render(<WindAndHumidity {...defaultProps} />);

    expect(
      screen.getByLabelText('Wind and humidity information'),
    ).toBeInTheDocument();
  });

  it('displays wind speed correctly', () => {
    render(<WindAndHumidity {...defaultProps} />);

    const windElement = screen.getByLabelText('Wind speed');
    expect(windElement).toHaveTextContent('15 km/h');
  });

  it('displays humidity correctly', () => {
    render(<WindAndHumidity {...defaultProps} />);

    const humidityElement = screen.getByLabelText('Humidity');
    expect(humidityElement).toHaveTextContent('65%');
  });

  it('floors wind speed to nearest integer', () => {
    render(<WindAndHumidity windSpeed={20.9} humidity={50} />);

    const windElement = screen.getByLabelText('Wind speed');
    expect(windElement).toHaveTextContent('20 km/h');
  });

  it('floors humidity to nearest integer', () => {
    render(<WindAndHumidity windSpeed={10} humidity={75.9} />);

    const humidityElement = screen.getByLabelText('Humidity');
    expect(humidityElement).toHaveTextContent('75%');
  });

  it('applies custom className', () => {
    render(<WindAndHumidity {...defaultProps} className="custom-class" />);

    const container = screen.getByLabelText('Wind and humidity information');
    expect(container).toHaveClass('custom-class');
  });

  it('has default classes applied', () => {
    render(<WindAndHumidity {...defaultProps} />);

    const container = screen.getByLabelText('Wind and humidity information');
    expect(container).toHaveClass(
      'more-details',
      'text-foreground-secondary',
      'flex',
      'gap-4',
    );
  });

  it('handles zero values', () => {
    render(<WindAndHumidity windSpeed={0} humidity={0} />);

    expect(screen.getByLabelText('Wind speed')).toHaveTextContent('0 km/h');
    expect(screen.getByLabelText('Humidity')).toHaveTextContent('0%');
  });

  it('renders Wind and Droplet icons', () => {
    const { container } = render(<WindAndHumidity {...defaultProps} />);

    const svgs = container.querySelectorAll('svg');
    expect(svgs.length).toBe(2);
  });
});
