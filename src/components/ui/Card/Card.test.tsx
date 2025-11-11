import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class">
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('article', { name: 'card' });
    expect(card).toHaveClass('custom-class');
  });

  it('has default classes applied', () => {
    render(
      <Card>
        <div>Content</div>
      </Card>,
    );

    const card = screen.getByRole('article', { name: 'card' });
    expect(card).toHaveClass('rounded-lg', 'bg-background', 'p-6');
  });
});
