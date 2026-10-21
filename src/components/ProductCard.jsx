
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ p }) {
    const {addToCart, cartItems} = useCart();
    const productInCart = cartItems.find((item) =>item.id === p.id);
    const productQuatityLabel = productInCart ? 
    `(${productInCart.quantity})`:
    "";
    return (
        <div className="product-card">
            <img src={p.image} className="product-card-image" alt={p.image} />
            <div>
                <h3 className="product-card-name">{p.name}</h3>
                <p className="product-card-price">${p.price}</p>
            </div>
            <div className="product-card-actions">
                <Link className="btn btn-secondary" to={`products/${p.id}`}>View Details</Link>
                <button 
                className="btn btn-primary" 
                onClick={()=> addToCart(p.id)}
                >Add to Cart{productQuatityLabel}</button>
            </div>
        </div>
    );
}

export default ProductCard;