import PropTypes from 'prop-types';

const CartItems = ({ item, updateQuantity, removeFromCart }) => {
    const { product, quantity } = item;

    return (
        <div>
            <p>{product.title}</p>
            <p>${product.price}</p>

            <button onClick={() => {
                if (quantity - 1 === 0) {
                    removeFromCart(product.id);
                } else {
                    updateQuantity(product.id, quantity - 1);
                }
            }}>-</button>

            <span>{quantity}</span>

            <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>

            <button onClick={() => removeFromCart(product.id)}>Remove</button>

            <p>Subtotle: ${(product.price * quantity).toFixed(2)}</p>
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