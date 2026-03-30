import { Routes, Route } from 'react-router-dom';
import useCart from './hooks/useCart';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';

const App = () => {
    const { cartItems, addToCart, updateQuantity, removeFromCart, totalCount } = useCart();

    return (
        <>
        <Navbar totalCount={totalCount} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
            <Route
            path="/cart"
            element={
                <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                />
            }
            />
        </Routes>
        </>
    );
};

export default App;