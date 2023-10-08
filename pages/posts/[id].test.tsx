import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Id from './[id]';
import { useRouter } from 'next/router';

// Mock hooks and context
jest.mock('next/router', () => ({
    useRouter: jest.fn()
}));

jest.mock('@/hooks/UseNews', () => ({
    useNews: jest.fn()
}));

jest.mock('@/pages/_app', () => ({
    ViewContext: React.createContext({ articleValues: { apiUrl: 'test_url' } })
}));

describe('<Id />', () => {
    it('renders loading state initially', () => {
        const mockRouter = {
            query: {},
            isReady: false
        };

        // useRouter.mockReturnValue(mockRouter);

        render(<Id />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

});
