
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductFilters } from "@/components/ProductFilters";
import { products } from "@/data/products";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  const maxPrice = Math.max(...products.map(p => p.price));

  const handleFilterChange = (filters: {
    categories: string[];
    priceRange: [number, number];
    onlyNew: boolean;
    onlyOnSale: boolean;
    minRating: number;
    searchTerm: string;
  }) => {
    const filtered = products.filter(product => {
      // Filter by category
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }
      
      // Filter by price
      const [minPrice, maxPrice] = filters.priceRange;
      const productPrice = product.salePrice || product.price;
      if (productPrice < minPrice || productPrice > maxPrice) {
        return false;
      }
      
      // Filter by new
      if (filters.onlyNew && !product.isNew) {
        return false;
      }
      
      // Filter by sale
      if (filters.onlyOnSale && !product.isSale) {
        return false;
      }
      
      // Filter by rating
      if (product.rating < filters.minRating) {
        return false;
      }
      
      // Filter by search term
      if (filters.searchTerm) {
        const searchTerm = filters.searchTerm.toLowerCase();
        return (
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm)
        );
      }
      
      return true;
    });
    
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header />
      <main className="container py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">All Products</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="hidden md:block w-full md:w-64 lg:w-72 space-y-6">
            <ProductFilters onFilterChange={handleFilterChange} maxPrice={maxPrice} />
          </aside>
          
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} products
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden" size="sm">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="py-4">
                    <ProductFilters onFilterChange={handleFilterChange} maxPrice={maxPrice} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-muted-foreground mb-4">
                  No products found matching your criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => handleFilterChange({
                    categories: [],
                    priceRange: [0, maxPrice],
                    onlyNew: false,
                    onlyOnSale: false,
                    minRating: 0,
                    searchTerm: ""
                  })}
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;
