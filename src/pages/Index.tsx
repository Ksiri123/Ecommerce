
import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategorySection } from "@/components/CategorySection";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { ProductGrid } from "@/components/ProductGrid";
import { products, categories } from "@/data/products";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Limit featured products to 8 for better display
  const featuredProducts = products
    .filter(product => product.isNew || product.isSale)
    .slice(0, 8);
    
  // Get only new arrivals, limited to 8 for display
  const newArrivals = products
    .filter(product => product.isNew)
    .slice(0, 8);
  
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };
  
  // When a category is selected, show products from that category
  const categoryProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory).slice(0, 8)
    : [];
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts products={featuredProducts} title="Featured Products" />
        <CategorySection 
          onCategorySelect={handleCategorySelect} 
          selectedCategory={selectedCategory}
        />
        
        {selectedCategory && (
          <section id={`${selectedCategory}-products`} className="py-12 container">
            <ProductGrid 
              products={categoryProducts} 
              title={`${categories.find(c => c.id === selectedCategory)?.name} Products`} 
            />
          </section>
        )}
        
        <FeaturedProducts products={newArrivals} title="New Arrivals" />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
