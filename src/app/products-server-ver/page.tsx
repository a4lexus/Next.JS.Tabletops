import Product from "@/types/Product";

const ProductServerVersion = async () => {
  const res = await fetch("https://dummyjson.com/products", {});
  const { products } = await res.json();
  return (
    <div className="bg-blue-200 h-screen">
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            {product.title}, ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductServerVersion;
