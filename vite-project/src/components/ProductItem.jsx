import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    }));
  };

  return (
    <article className="product-item">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="product-img"
        />
        <h3 className="product-title">{product.title}</h3>
      </Link>

      <div className="product-meta">
        <div className="price">₹{product.price}</div>
        <button className="btn" onClick={handleAdd}>Add to cart</button>
      </div>
    </article>
  );
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};
