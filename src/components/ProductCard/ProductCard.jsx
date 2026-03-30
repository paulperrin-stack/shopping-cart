import { useState } from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) setQuantity(value);
    };

    return (
        <div>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={handleDecrement}>-</button>
        <input type="number" value={quantity} onChange={handleInputChange} />
        <button onClick={handleIncrement}>+</button>
        <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    addToCart: PropTypes.func.isRequired,
};

export default ProductCard;