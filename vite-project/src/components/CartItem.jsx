import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-thumb" loading="lazy" />
      <div className="cart-info">
        <h4>{item.title}</h4>
        <div className="cart-controls">
          <button onClick={() => dispatch(decreaseQty(item.id))} className="small">-</button>
          <span className="qty">{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))} className="small">+</button>
        </div>
      </div>
      <div className="cart-right">
        <div className="price">₹{item.price * item.quantity}</div>
        <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};
