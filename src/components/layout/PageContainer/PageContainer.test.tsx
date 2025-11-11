import { render, screen } from '@testing-library/react';
import PageContainer from './PageContainer';

describe('PageContainer', () => {
  it('renders children correctly', () => {
    render(
      <PageContainer>
        <div>Test Content</div>
      </PageContainer>,
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders as main element', () => {
    render(
      <PageContainer>
        <div>Content</div>
      </PageContainer>,
    );

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('has default classes applied', () => {
    render(
      <PageContainer>
        <div>Content</div>
      </PageContainer>,
    );

    const main = screen.getByRole('main');
    expect(main).toHaveClass(
      'max-w-7xl',
      'mx-auto',
      'px-4',
      'sm:px-6',
      'lg:px-8',
      'py-8',
      'lg:py-0',
      'select-none',
    );
  });
});
