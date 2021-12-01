import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [hasError, setHasError] = React.useState(false);
  //   console.log(products);
  //   React.useEffect(() => console.log("Only First Render"), []);
  //   React.useEffect(() => console.log("First Render And Products"), [products]);
  //   React.useEffect(() => console.log("This will be called on each render"));
  const getData = () => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  };
  React.useEffect(function () {
    // console.log("Sending Ajax call");
    getData();
  }, []);
  return (
    <div>
      <h3>Products</h3>
      <Link to="/products/create">Add New Product</Link>
      {products.length == 0 && !hasError && <p>Loading ...</p>}
      {hasError && <p>Something Wrong Happened. We are looking into it</p>}
      {products.map((p) => (
        <SingleProduct product={p} onDelete={getData} />
      ))}
    </div>
  );
};

export default Products;
