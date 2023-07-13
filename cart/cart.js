// Cart.js
import React, { useState } from 'react';
import CartItem from './cartitem';
import styles from './cart.module.css';
import Navigation from '../Dashboard/Navigation';
import Footer from '../Dashboard/Footer';
const Cart = ({ handleBackToCourses }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 7.99 },
  ]);

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };


  return (
   <>
   <Navigation></Navigation>
   <center>
    <div className={styles['cart-container']}>
      <h1 className={styles['cart-title']}>Shopping Cart</h1>
      <div className={styles['cart-items']}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              styles={styles} // Pass the styles object to the CartItem component
            />
          ))
        ) : (
          <p className={styles['empty-cart']}>Your cart is empty.</p>
        )}
      </div>
      {cartItems.length > 0 && (
        <h3 className={styles['cart-total']}>Total: ₹{calculateTotal()}</h3>
      )}
      <div className={styles['cart-buttons']}>
        <button
          className={`${styles['cart-button']} ${styles['back-button']}`}
          onClick={handleBackToCourses}
        >
          Back to Courses
        </button>
        {cartItems.length > 0 && (
          <button className={`${styles['cart-button']} ${styles['pay-button']}`}>
            Pay
          </button>
        )}
      </div>
    </div>
    </center>
   <Footer></Footer>
    </>
  );
  
};

export default Cart;
