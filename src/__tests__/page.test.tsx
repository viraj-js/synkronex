import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskManagerDocs from '../app/page';

describe('TaskManagerDocs page', () => {
  it('renders hero section', () => {
    render(<TaskManagerDocs />);
    // Check for a known hero text from content
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
