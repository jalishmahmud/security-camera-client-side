import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../../Home/Product/Product";

const ExploreAllCctv = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://obscure-crag-25487.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <Container>
          <h2 className="mt-5 text-center">All CCTV</h2>
          <Row>
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExploreAllCctv;
