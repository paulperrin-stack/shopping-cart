import PropTypes from 'prop-types';
import CartItem from '../../components/CartItem/CartItem';
import styles from './Cart.module.css';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    const total = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity, 0
    );

    if (cartItems.length === 0) {
        return <p className={styles.empty}>Your cart is empty.</p>;
    }

    return (
        <div className={styles.cart}>
        <h2>Your Cart</h2>
        {cartItems.map((item) => (
            <CartItem
            key={item.product.id}
            item={item}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            />
        ))}
        <p className={styles.total}>Total: ${total.toFixed(2)}</p>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Cart;