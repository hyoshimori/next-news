import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('# Footer Component', () => {
  it('renders without crashing', () => {
    console.log('# component/Footer:' ,'Footer Component must exist.');
    render(<Footer />);
  });
});
