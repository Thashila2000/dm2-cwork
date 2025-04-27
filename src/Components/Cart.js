function Cart({ cartItems, onRemoveFromCart }) {
    return (
      <div>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default Cart;