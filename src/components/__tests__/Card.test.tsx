import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders image if image prop is provided', () => {
    render(
      <Card image="/test.png" alt="test-alt">
        Img Content
      </Card>
    );
    expect(screen.getByAltText('test-alt')).toBeInTheDocument();
  });

  it('renders actions if actions prop is provided', () => {
    render(<Card actions={<button>Click me</button>}>With Actions</Card>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
