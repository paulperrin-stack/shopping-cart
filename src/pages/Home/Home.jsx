import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Welcome to the Shop</h1>
            <p>Browse our products and add them to your cart.</p>
            <Link to="/shop" className={styles.btn}>Go to Shop</Link>
        </div>
    );
};

export default Home;