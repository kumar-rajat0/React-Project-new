import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";
import PropTypes from "prop-types";

export default function Header() {
  const cartItems = useSelector((s) => s.cart.items);
  const searchQuery = useSelector((s) => s.search.query);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="brand">ShoppyGlobe</Link>
        <nav className="nav">
          <NavLink to="/" end className={({isActive})=>isActive?"active":""}>Home</NavLink>
          <NavLink to="/cart" className={({isActive})=>isActive?"active":""}>Cart</NavLink>
          <NavLink to="/checkout" className={({isActive})=>isActive?"active":""}>Checkout</NavLink>
        </nav>
      </div>

      <div className="header-right">
        <input
          aria-label="Search products"
          placeholder="Search products..."
          className="search"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <Link to="/cart" className="cart-link" title="Cart">
          🛒 <span className="cart-count">{cartItems.reduce((s, i) => s + i.quantity, 0)}</span>
        </Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  // no props; uses redux
};
