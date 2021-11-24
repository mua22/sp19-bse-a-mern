import React from "react";
import { Link } from "react-router-dom";
const SingleProduct = (props) => {
  let product = props.product;
  return (
    <div>
      <h4>
        <Link to={"/products/details/" + product._id}>{product.name}</Link>{" "}
      </h4>
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
