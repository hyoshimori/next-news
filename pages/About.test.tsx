import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('# About component', () => {
  it('renders without crashing', () => {
    console.log('About Component must exist.');
    render(<About />);
  });

  it('renders the title', () => {
    const { getByText } = render(<About />);
    console.log('About Component must exist.');
    const title = getByText('About NextNews');
    expect(title).toBeInTheDocument();
  });
});
