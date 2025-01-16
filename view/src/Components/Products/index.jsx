import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function Products() {
  let [products, setProducts] = useState([]);

  function getData() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProducts(res.data));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 style={{}}>FEATURED PRODUCTS</h1>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <img src={product.image} alt="" />
            <div className="card-text">
              <h3>{product.name}</h3>
              <span>{product.description}</span>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow">
        <FaArrowLeft />
        <FaArrowRight />
      </div>
    </>
  );
}

export default Products;
