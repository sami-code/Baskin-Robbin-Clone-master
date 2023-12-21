import React from "react";
import SingleProduct from "../Singleproduct";
import axios from "axios";

const Products = () => {
  const [products, setproducts] = React.useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3000/api_data/products/")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);

  return (
    <div>
      <h1>products</h1>
      {products.length == 0 ? (
        <p>There are no products </p>
      ) : (
        <div>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
