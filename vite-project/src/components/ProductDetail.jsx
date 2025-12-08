import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let cancelled = false;
    async function fetchDetail() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) setProduct(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to fetch product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchDetail();
    return () => (cancelled = true);
  }, [id]);

  if (loading) return <div className="center">Loading product...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="center">Product not found</div>;

  return (
    <div className="product-detail">
      <div className="detail-left">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        <div className="thumbs">
          {product.images?.slice(0, 4).map((img, idx) => (
            <img key={idx} src={img} alt={`${product.title}-${idx}`} loading="lazy" />
          ))}
        </div>
      </div>

      <div className="detail-right">
        <h1>{product.title}</h1>
        <p className="brand">{product.brand}</p>
        <p className="desc">{product.description}</p>

        <div className="price-block">
          <div className="price">₹{product.price}</div>
          <div className="rating">⭐ {product.rating}</div>
        </div>

        <button
          className="btn large"
          onClick={() =>
            dispatch(
              addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                thumbnail: product.thumbnail,
              })
            )
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  // Uses route 
};
