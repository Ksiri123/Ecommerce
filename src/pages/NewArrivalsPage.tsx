
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";
import { useEffect } from "react";

const NewArrivalsPage = () => {
  // Filter products that are marked as new
  const newArrivals = products.filter(product => product.isNew);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Header />
      <main className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">New Arrivals</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our latest collection of fresh designs and trendy items, newly added to our store.
          </p>
        </div>

        <ProductGrid products={newArrivals} />
      </main>
      <Footer />
    </>
  );
};

export default NewArrivalsPage;
