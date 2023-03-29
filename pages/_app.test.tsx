import { render } from '@testing-library/react'
import NavLayout from '../layouts/NavLayout'

import { useRouter } from 'next/router';

jest.mock('next/router');

describe('NavLayout', () => {
  it('renders the Nav component', () => {
    const { container } = render(<NavLayout>test content</NavLayout>)
    expect(container.textContent).toContain('test content')
  })
})
