import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const query = useSelector((s) => s.search.query?.toLowerCase?.() || "");

  const filtered = products.filter((p) => {
    if (!query) return true;
    return (
      p.title?.toLowerCase().includes(query) ||
      p.description?.toLowerCase().includes(query) ||
      p.brand?.toLowerCase().includes(query)
    );
  });

  if (loading) return <div className="center">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="product-list">
      {filtered.length === 0 ? (
        <div className="center">No products found for your search.</div>
      ) : (
        filtered.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </section>
  );
}
