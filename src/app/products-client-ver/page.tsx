"use client";

import Product from "@/types/Product";
import { useEffect, useState } from "react";

const ProductsClient = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-blue-200 ">
      <ul>
        {products.map((product) => (
          <li key={product.id}> {product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsClient;
