import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Progress from './Progress';

describe('Progress component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('renders progress bar', () => {
    console.log('# component/Progress:', 'Progress Component must exist.');

    render(<Progress />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
  });

  test('progress bar has correct max attribute', () => {
    console.log('# component/Progress:', 'Progress Component must have correct max attribute.');

    render(<Progress />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('max', '100');
  });

  test('progress bar initializes with correct value', () => {
    console.log('# component/Progress:', 'Progress Component must initialize with correct value.');

    render(<Progress />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('value', '0');
  });

  test('progress bar updates value correctly', async () => {
    console.log('# component/Progress:', 'Progress Component must update value correctly.');

    render(<Progress />);

    const progressBar = screen.getByRole('progressbar');

    await act(async () => {
      jest.advanceTimersByTime(10);
    });
    expect(progressBar).toHaveAttribute('value', '0.5');

    await act(async () => {
      jest.advanceTimersByTime(10);
    });
    expect(progressBar).toHaveAttribute('value', '1');
  });
});