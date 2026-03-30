import PropTypes from 'prop-types';
import CartItem from '../../components/CartItem/CartItem';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    if (cartItems.length === 0) return <p>Your cart is empty.</p>;

    return (
        <div>
            {cartItems.map((item) => (
                <CartItem
                    key={item.product.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Cart;