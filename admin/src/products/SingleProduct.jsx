import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SingleProduct = (props) => {
  let product = props.product;
  return (
    <div>
      <h4>
        <Link to={"/products/details/" + product._id}>{product.name}</Link>{" "}
      </h4>
      <Link to={"/products/edit/" + product._id}>Edit</Link>
      <button
        onClick={() => {
          axios
            .delete(
              "https://usman-recipes.herokuapp.com/api/products/" + product._id
            )
            .then((res) => {
              console.log("Deleted");
              props.onDelete();
            });
        }}
      >
        Delete
      </button>
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
