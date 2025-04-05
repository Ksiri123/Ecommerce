
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types";

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
}

export function FeaturedProducts({ products, title = "Featured Products" }: FeaturedProductsProps) {
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  const showMoreProducts = () => {
    setVisibleProducts(prev => Math.min(prev + 4, products.length));
  };
  
  const displayedProducts = products.slice(0, visibleProducts);
  
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {visibleProducts < products.length && (
          <div className="flex justify-center mt-8">
            <Button onClick={showMoreProducts} variant="outline">
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
