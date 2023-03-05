import { render } from '@testing-library/react'
import NavLayout from '../layouts/NavLayout'

describe('NavLayout', () => {
  it('renders the Nav component', () => {
    const { container } = render(<NavLayout>test content</NavLayout>)
    expect(container.textContent).toContain('test content')
  })
})
