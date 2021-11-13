import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PurchaseProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h2>Purchase Product {product.cameraName}</h2>
    </div>
  );
};

export default PurchaseProduct;
