
import { Link } from 'react-router-dom';

function ProductCard({ p }) {
    return (
        <div className="product-card">
            <img src={p.image} className="product-card-image" alt={p.image} />
            <div>
                <h3 className="product-card-name">{p.name}</h3>
                <p className="product-card-price">${p.price}</p>
            </div>
            <div className="product-card-actions">
                <Link className="btn btn-secondary">View Details</Link>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;