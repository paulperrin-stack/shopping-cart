import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';

const Navbar = ({ totalCount }) => {
    return (
        <nav className={styles.navbar}>
        <span className={styles.logo}>MyShop</span>
        <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
            Cart {totalCount > 0 && <span className={styles.badge}>{totalCount}</span>}
            </Link>
        </div>
        </nav>
    );
};

Navbar.propTypes = {
    totalCount: PropTypes.number.isRequired,
};

export default Navbar;