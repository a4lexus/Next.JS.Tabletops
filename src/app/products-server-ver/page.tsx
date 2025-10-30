import { ProductCard } from "@/components/ProductCard/ProductCard";
import Product from "@/types/Product";

const ProductServerVersion = async () => {
  const res = await fetch("https://dummyjson.com/products", {});
  const { products } = await res.json();

  return (
    <div className="bg-blue-200 p-12 ">
      <ul>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} variant={"default"} />
        ))}
      </ul>
    </div>
  );
};

export default ProductServerVersion;
