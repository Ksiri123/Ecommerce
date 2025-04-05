
import { useState } from "react";
import { Category } from "@/types";
import { categories } from "@/data/products";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, ShoppingBag, Shirt, Book, Home, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CategorySectionProps {
  onCategorySelect?: (categoryId: string | null) => void;
  selectedCategory?: string | null;
}

export function CategorySection({ onCategorySelect, selectedCategory }: CategorySectionProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  // Image URLs for category backgrounds
  const categoryImages: Record<string, string> = {
    electronics: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60",
    clothing: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500&auto=format&fit=crop&q=60",
    books: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60",
    home: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60",
    beauty: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&auto=format&fit=crop&q=60"
  };

  // Category descriptions
  const categoryDescriptions: Record<string, string> = {
    electronics: "Discover the latest gadgets and tech innovations. From smartphones to smart home devices, find everything to enhance your digital lifestyle.",
    clothing: "Browse our collection of stylish clothing for all occasions. Quality fabrics and trendy designs to keep you looking your best.",
    books: "Immerse yourself in our extensive library of books. From bestsellers to classics, find your next favorite read.",
    home: "Transform your living space with our home & kitchen collection. Stylish, functional products to make your house a home.",
    beauty: "Pamper yourself with our beauty & personal care products. High-quality skincare, makeup, and more for your self-care routine."
  };

  // Category icons
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "electronics":
        return <ShoppingBag className="h-5 w-5" />;
      case "clothing":
        return <Shirt className="h-5 w-5" />;
      case "books":
        return <Book className="h-5 w-5" />;
      case "home":
        return <Home className="h-5 w-5" />;
      case "beauty":
        return <Sparkles className="h-5 w-5" />;
      default:
        return <ShoppingBag className="h-5 w-5" />;
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    // Toggle the open category
    setOpenCategory(openCategory === categoryId ? null : categoryId);
    
    // If this has a parent selection handler, call it too
    if (onCategorySelect) {
      onCategorySelect(categoryId === selectedCategory ? null : categoryId);
    }
    
    // Scroll to product section after selecting category
    if (categoryId !== selectedCategory) {
      setTimeout(() => {
        const productSection = document.getElementById(`${categoryId}-products`);
        if (productSection) {
          productSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigateToCategory = (categoryId: string) => {
    navigate(`/categories?category=${categoryId}`);
  };

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <div
                onClick={() => handleCategoryClick(category.id)}
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  category.id === selectedCategory ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="aspect-square relative">
                  <img 
                    src={categoryImages[category.id]} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white font-medium text-lg">{category.name}</span>
                  </div>
                </div>
              </div>
              
              <Collapsible 
                open={openCategory === category.id} 
                onOpenChange={(open) => {
                  if (open) setOpenCategory(category.id);
                  else setOpenCategory(null);
                }}
                className="w-full"
              >
                <CollapsibleContent className="bg-white p-3 rounded-md shadow-sm text-sm mt-2 animate-accordion-down">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-2">
                      {getCategoryIcon(category.id)}
                      <p>{categoryDescriptions[category.id]}</p>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToCategory(category.id);
                      }}
                      className="self-end"
                    >
                      View All {category.name}
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
