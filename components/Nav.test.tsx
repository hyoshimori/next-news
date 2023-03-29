import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Nav from './Nav';
import { useRouter } from 'next/router';


jest.mock('next/router');

describe('# Nav Component', () => {
  it('renders without crashing', () => {
    console.log('# component/Nav:' ,'Nav Component must exist.');
    render(<Nav />);
  });

  it('displays the correct title', () => {
    const { getByText } = render(<Nav />);
    const title = getByText('NextNews');
    expect(title).toBeInTheDocument();

    console.log('# component/Nav:' ,`"${title.innerHTML}"'s each first letter needs to be uppercase.`);

    const firstChar = title.innerHTML.charAt(0);
    expect(firstChar).toMatch(/[A-Z]/);
  });
});

describe('Nav', () => {
  it('toggles the category list when the menu icon is clicked', () => {
    console.log('# component/Nav:' ,'toggle swicth must function with classNames.');
    const { getByTestId } = render(<Nav />);
    const menuIcon = getByTestId('menu-icon');
    fireEvent.click(menuIcon);
    const categoryList = getByTestId('category-list');
    expect(categoryList).toHaveClass('category__2__show');
  });
});

describe('Nav', () => {
  it('hides the category list when the back arrow icon is clicked', () => {
    console.log('# component/Nav:' ,'Arrow must hide the category list when the back arrow icon is clicked');
    const { getByTestId } = render(<Nav />);
    const menuIcon = getByTestId('menu-icon');
    const backArrowIcon = getByTestId('back-arrow-icon');
    fireEvent.click(menuIcon)
    fireEvent.click(backArrowIcon)
    const categoryList = getByTestId('category-list')
    expect(categoryList).not.toHaveClass('category__2__show')
  })
})
