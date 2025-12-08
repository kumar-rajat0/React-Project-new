import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);

  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

  if (items.length === 0)
    return (
      <div className="center">
        Your cart is empty. <Link to="/">Go shopping</Link>
      </div>
    );

  return (
    <section className="cart-page">
      <div className="cart-list">
        {items.map((it) => (
          <CartItem key={it.id} item={it} />
        ))}
      </div>

      <aside className="cart-summary">
        <h3>Order Summary</h3>
        <div className="summary-row">
          <span>Items:</span>
          <span>{items.length}</span>
        </div>
        <div className="summary-row">
          <strong>Total:</strong>
          <strong>₹{total}</strong>
        </div>

        <Link to="/checkout">
          <button className="btn large">Proceed to Checkout</button>
        </Link>
      </aside>
    </section>
  );
}
