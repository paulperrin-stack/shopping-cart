import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ totalCount }) => {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart {totalCount > 0 && <span>({totalCount})</span>}</Link>
        </nav>
    );
};

Navbar.propTypes = {
    totalCount: PropTypes.number.isRequired,
};

export default Navbar;