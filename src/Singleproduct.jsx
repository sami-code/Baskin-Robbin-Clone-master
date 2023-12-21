import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <h2>{product._id}</h2>
      <h2> {product.name}</h2>
      <h3> {product.price}</h3>
      <h4> {product.url}</h4>
      <p> {product.details}</p>
    </div>
  );
};

export default SingleProduct;
