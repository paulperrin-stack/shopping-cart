import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from './ProductCard';

const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: 9.99,
    image: 'https://via.placeholder.com/150',
};

const renderProductCard = (addToCart = vi.fn()) => {
    render(<ProductCard product={mockProduct} addToCart={addToCart} />);
};

describe('ProductCard', () => {
    it('renders product title and price', () => {
        renderProductCard();
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('$9.99')).toBeInTheDocument();
    });

    it('renders quantity input with default value of 1', () => {
        renderProductCard();
        expect(screen.getByRole('spinbutton')).toHaveValue(1);
    });

    it('increments quantity when + is clicked', async () => {
        const user = userEvent.setup();
        renderProductCard();
        await user.click(screen.getByRole('button', { name: '+' }));
        expect(screen.getByRole('spinbutton')).toHaveValue(2);
    });

    it('decrements quantity when - is clicked', async () => {
        const user = userEvent.setup();
        renderProductCard();
        await user.click(screen.getByRole('button', { name: '+' })); // go to 2
        await user.click(screen.getByRole('button', { name: '-' })); // back to 1
        expect(screen.getByRole('spinbutton')).toHaveValue(1);
    });

    it('does not go below 1 when decrement is clicked at 1', async () => {
        const user = userEvent.setup();
        renderProductCard();
        await user.click(screen.getByRole('button', { name: '-' }));
        expect(screen.getByRole('spinbutton')).toHaveValue(1);
    });

    it('calls addToCart with correct product and quantity', async () => {
        const user = userEvent.setup();
        const addToCart = vi.fn();
        renderProductCard(addToCart);

        await user.click(screen.getByRole('button', { name: '+' })); // quantity = 2
        await user.click(screen.getByRole('button', { name: /add to cart/i }));

        expect(addToCart).toHaveBeenCalledWith(mockProduct, 2);
    });
    });