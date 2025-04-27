import { useEffect, useState } from 'react';
import axios from 'axios';


const Ring =({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get('http://localhost:8080/products/category/Ring')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity each time
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const productWithQuantity = { ...selectedProduct, quantity };
      onAddToCart(productWithQuantity);
      setSelectedProduct(null); // Close modal after adding
    }
  return (
    <div className="p-4">
      {/* Products Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 200 }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <button onClick={() => handleViewDetails(product)}>View Details</button>
          </div>
        ))}
      </div>

      {/* Product Details Popup */}
      {selectedProduct && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%',
          height: '100%', backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ backgroundColor: 'white', padding: 20, width: 400, borderRadius: 8, position: 'relative' }}>
            <button onClick={closeDetails} style={{ position: 'absolute', top: 10, right: 10 }}>X</button>

            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} style={{ width: '100%', borderRadius: 8 }} />
            <h2>{selectedProduct.name}</h2>
            <p>${selectedProduct.price}</p>

            {/* Quantity Controls */}
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
              <button onClick={decreaseQuantity} style={{ padding: '5px 10px', marginRight: 10 }}>-</button>
              <span style={{ fontSize: 18 }}>{quantity}</span>
              <button onClick={increaseQuantity} style={{ padding: '5px 10px', marginLeft: 10 }}>+</button>
            </div>

            {/* Add to Cart Button */}
            <button onClick={handleAddToCart} style={{ marginTop: 20, padding: '10px 20px' }}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
};
export default Ring;