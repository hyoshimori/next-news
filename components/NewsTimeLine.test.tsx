import React from 'react';
import { render } from '@testing-library/react';
import NewsTimeLine from './NewsTimeLine';
import Footer from './Footer';

describe('# NewsTimeLine Component', () => {
  it('renders without crashing', () => {
    console.log('# component/NewsTimeLine:' ,'NewsTimeLine Component must exist.');
    render(<NewsTimeLine />);
  });
});
