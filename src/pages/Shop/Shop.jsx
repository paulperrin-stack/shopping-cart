import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard';

const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading products...</p>;

    return (
        <div>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
        </div>
    );
};

Shop.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default Shop;