
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ProductGrid } from "@/components/ProductGrid";
import { Separator } from "@/components/ui/separator";
import { StarIcon, ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same category)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    } else {
      // Product not found, redirect to home
      navigate("/");
    }
  }, [id, navigate]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist(product.id)) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product);
      }
    }
  };
  
  if (!product) {
    return <div>Loading...</div>;
  }
  
  const displayPrice = product.isSale 
    ? <div className="flex gap-4 items-baseline">
        <span className="text-3xl font-bold text-shopping-accent">${product.salePrice?.toFixed(2)}</span>
        <span className="text-xl line-through text-muted-foreground">${product.price.toFixed(2)}</span>
        <span className="bg-shopping-accent/10 text-shopping-accent rounded px-2 py-1 text-sm font-semibold">
          {Math.round(((product.price - (product.salePrice || 0)) / product.price) * 100)}% OFF
        </span>
      </div>
    : <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>;
  
  return (
    <>
      <Header />
      <main className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-shopping-secondary fill-shopping-secondary" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{product.rating} ({Math.floor(Math.random() * 100) + 1} reviews)</span>
              </div>
            </div>
            
            {displayPrice}
            
            <p className="text-muted-foreground">{product.description}</p>
            
            <div className="flex flex-wrap gap-4">
              {product.isNew && (
                <span className="bg-shopping-accent/10 text-shopping-accent rounded px-2 py-1 text-sm">
                  New Arrival
                </span>
              )}
              <span className="bg-muted rounded px-2 py-1 text-sm">
                Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <span className="bg-muted rounded px-2 py-1 text-sm">
                In Stock
              </span>
            </div>
            
            <Separator />
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </Button>
              </div>
              
              <Button 
                className="flex-1 bg-shopping-primary hover:bg-shopping-primary/90"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleWishlistToggle}
                className={isInWishlist(product.id) ? "bg-gray-100" : ""}
              >
                <Heart className={`w-4 h-4 mr-2 ${isInWishlist(product.id) ? "text-shopping-accent fill-shopping-accent" : ""}`} />
                {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
