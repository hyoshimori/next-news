import React from 'react';
import { render } from '@testing-library/react';
import NewsTimeLine from '../main/timeline/NewsTimeLine';
import Footer from '../main/footer/Footer';

describe('# NewsTimeLine Component', () => {
  it('renders without crashing', () => {
    console.log('# component/NewsTimeLine:' ,'NewsTimeLine Component must exist.');
    render(<NewsTimeLine />);
  });
});
