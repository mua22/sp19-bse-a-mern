import React from "react";
const SingleProduct = (props) => {
  let product = props.product;
  return (
    <div>
      <h4>{product.name}</h4>
      <p>
        <b>Price: </b>
        {product.price}
      </p>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default SingleProduct;
