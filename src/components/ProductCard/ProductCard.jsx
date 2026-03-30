import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) setQuantity(value);
    };

    return (
        <div className={styles.card}>
        <img className={styles.image} src={product.image} alt={product.title} />
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.controls}>
            <button onClick={handleDecrement}>-</button>
            <input type="number" value={quantity} onChange={handleInputChange} />
            <button onClick={handleIncrement}>+</button>
        </div>
        <button className={styles.addBtn} onClick={() => addToCart(product, quantity)}>
            Add to Cart
        </button>
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