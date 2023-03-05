import React from 'react';
import { render } from '@testing-library/react';
import Nav from './Nav';

describe('# Nav Component', () => {
  it('renders without crashing', () => {
    console.log('# Nav: ' ,'Nav Component must exist.');
    render(<Nav />);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<Nav />);
    const title = getByText('News Next Times');
    expect(title).toBeInTheDocument();

    console.log('# Nav: ' ,`"${title.innerHTML}"'s each first letter needs to be uppercase.`);

    const firstChar = title.innerHTML.charAt(0);
    expect(firstChar).toMatch(/[A-Z]/);
  });
});
