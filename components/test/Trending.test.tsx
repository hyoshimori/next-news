import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Trending from '../main/nav/Trending';

describe('Trending component', () => {
  it('Renders Trending compnent', () => {
    console.log('# component/Trending:', 'Trending Component must be rendered without errors.');
    render(<Trending />)
  })
})