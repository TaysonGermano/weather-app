import { render, screen } from '@testing-library/react';
import RefreshBtn from './RefreshBtn';

// Mock the store module
const mockSetCoords = jest.fn();
jest.mock('@/store', () => {
  return {
    __esModule: true,
    default: jest.fn(() => mockSetCoords),
  };
});

describe('RefreshBtn', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders button correctly', () => {
    render(<RefreshBtn />);

    const button = screen.getByRole('button', { name: 'Refresh location' });
    expect(button).toBeInTheDocument();
  });

  it('has correct title attribute', () => {
    render(<RefreshBtn />);

    const button = screen.getByRole('button', { name: 'Refresh location' });
    expect(button).toHaveAttribute('title', 'Refresh location');
  });

  it('applies custom className', () => {
    render(<RefreshBtn className="custom-class" />);

    const button = screen.getByRole('button', { name: 'Refresh location' });
    expect(button).toHaveClass('custom-class');
  });

  it('has default classes applied', () => {
    render(<RefreshBtn />);

    const button = screen.getByRole('button', { name: 'Refresh location' });
    expect(button).toHaveClass(
      'cursor-pointer',
      'text-foreground',
      'hover:text-blue-500',
      'transition-colors',
    );
  });

  it('renders RotateCcw icon', () => {
    const { container } = render(<RefreshBtn />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
