import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <h1>Welcome to the Shop</h1>
        <p>Browse our products and add them to your cart.</p>
        <Link to="/shop">Go to Shop</Link>
        </div>
    );
};

export default Home;