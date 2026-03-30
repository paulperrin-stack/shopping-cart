import PropTypes from 'prop-types';
import styles from './CartItem.module.css';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    const { product, quantity } = item;

    return (
        <div className={styles.item}>
        <div className={styles.info}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
        </div>
        <div className={styles.controls}>
            <button onClick={() => {
            if (quantity - 1 === 0) removeFromCart(product.id);
            else updateQuantity(product.id, quantity - 1);
            }}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
        </div>
        <p className={styles.subtotal}>${(product.price * quantity).toFixed(2)}</p>
        <button className={styles.removeBtn} onClick={() => removeFromCart(product.id)}>
            Remove
        </button>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    }).isRequired,
    updateQuantity: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;