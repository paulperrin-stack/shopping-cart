import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { describe } from 'vitest';

const renderNavbar = (totalCount) => {
    render(
        <MemoryRouter>
            <Navbar totalCount={totalCount} />
        </MemoryRouter>
    );
};

describe('Navbar', () => {
    it('renders navigation links', () => {
        renderNavbar(0);
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/shop/i)).toBeInTheDocument();
    });

    it('does not show badge when cart is empty', () => {
        renderNavbar(0);
        expect(screen.queryByText(/\(0\)/)).not.toBeInTheDocument();
    });

    it('shows correct item count when cart has items', () => {
        renderNavbar(5);
        expect(screen.getByText('(5)')).toBeInTheDocument();
    });
});