import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartItem from './CartItem';

const mockItem = {
    product: { id: 1, title: 'Test Product', price: 10.00 },
    quantity: 2,
};

const renderCartItem = (updateQuantity = vi.fn(), removeFromCart = vi.fn()) => {
    render(
        <CartItem
        item={mockItem}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        />
    );
};

describe('CartItem', () => {
    it('renders product title and quantity', () => {
        renderCartItem();
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('renders correct subtotal', () => {
        renderCartItem();
        expect(screen.getByText('Subtotal: $20.00')).toBeInTheDocument();
    });

    it('calls updateQuantity with increased quantity on + click', async () => {
        const user = userEvent.setup();
        const updateQuantity = vi.fn();
        renderCartItem(updateQuantity);

        await user.click(screen.getByRole('button', { name: '+' }));
        expect(updateQuantity).toHaveBeenCalledWith(1, 3);
    });

    it('calls updateQuantity with decreased quantity on - click', async () => {
        const user = userEvent.setup();
        const updateQuantity = vi.fn();
        renderCartItem(updateQuantity);

        await user.click(screen.getByRole('button', { name: '-' }));
        expect(updateQuantity).toHaveBeenCalledWith(1, 1);
    });

    it('calls removeFromCart when quantity would reach 0', async () => {
        const user = userEvent.setup();
        const removeFromCart = vi.fn();
        // quantity is 1, clicking - should remove
        render(
        <CartItem
            item={{ ...mockItem, quantity: 1 }}
            updateQuantity={vi.fn()}
            removeFromCart={removeFromCart}
        />
        );
        await user.click(screen.getByRole('button', { name: '-' }));
        expect(removeFromCart).toHaveBeenCalledWith(1);
    });

    it('calls removeFromCart when Remove button is clicked', async () => {
        const user = userEvent.setup();
        const removeFromCart = vi.fn();
        renderCartItem(vi.fn(), removeFromCart);

        await user.click(screen.getByRole('button', { name: /remove/i }));
        expect(removeFromCart).toHaveBeenCalledWith(1);
    });
});