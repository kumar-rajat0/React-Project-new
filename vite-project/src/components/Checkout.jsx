import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // simple validation
    if (!form.name || !form.email || !form.address) {
      setMessage("Please complete all fields.");
      return;
    }

    
    dispatch(clearCart());
    setMessage("Order placed");
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1100); 
  };

  if (items.length === 0) {
    return <div className="center">Your cart is empty — nothing to checkout.</div>;
  }

  return (
    <div className="checkout">
      <div className="checkout-left">
        <h2>Checkout</h2>
        <form onSubmit={handlePlaceOrder} className="checkout-form">
          <label>
            Name
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>
          <label>
            Email
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>
          <label>
            Address
            <textarea value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          </label>

          <button type="submit" className="btn large">Place Order</button>
          {message && <div className="info">{message}</div>}
        </form>
      </div>

      <aside className="checkout-right">
        <h3>Order Summary</h3>
        {items.map((it) => (
          <div key={it.id} className="summary-item">
            <span>{it.title} x {it.quantity}</span>
            <span>₹{it.price * it.quantity}</span>
          </div>
        ))}
        <div className="summary-total">
          <strong>Total</strong>
          <strong>₹{total}</strong>
        </div>
      </aside>
    </div>
  );
}
