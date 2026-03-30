import { render, screen } from '@testing-library/react';
import Cart from './Cart';

const mockCartItems = [
    { product: { id: 1, title: 'Product A', price: 5.00 }, quantity: 2 },
    { product: { id: 2, title: 'Product B', price: 10.00 }, quantity: 1 },
];

describe('Cart', () => {
    it('shows empty message when cart has no items', () => {
        render(
        <Cart cartItems={[]} updateQuantity={vi.fn()} removeFromCart={vi.fn()} />
        );
        expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    });

    it('renders all cart items', () => {
        render(
        <Cart
            cartItems={mockCartItems}
            updateQuantity={vi.fn()}
            removeFromCart={vi.fn()}
        />
        );
        expect(screen.getByText('Product A')).toBeInTheDocument();
        expect(screen.getByText('Product B')).toBeInTheDocument();
    });

    it('renders correct grand total', () => {
        render(
        <Cart
            cartItems={mockCartItems}
            updateQuantity={vi.fn()}
            removeFromCart={vi.fn()}
        />
        );
        // 5*2 + 10*1 = $20.00
        expect(screen.getByText('Total: $20.00')).toBeInTheDocument();
    });
});