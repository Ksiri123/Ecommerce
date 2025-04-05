
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useWishlist } from "@/context/WishlistContext";
import { Button } from "@/components/ui/button";
import { Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "@/context/CartContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <>
      <Header />
      <main className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Items you've saved for later. Add them to your cart when you're ready to purchase.
          </p>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <Card key={product.id} className="overflow-hidden product-card-hover">
                <div className="relative">
                  <Link to={`/product/${product.id}`}>
                    <AspectRatio ratio={1/1} className="bg-muted">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="product-image object-cover w-full h-full"
                        loading="lazy"
                      />
                    </AspectRatio>
                  </Link>
                  {product.isNew && <span className="badge-new">New</span>}
                  {product.isSale && <span className="badge-sale">Sale</span>}
                  <Button 
                    variant="destructive"
                    size="icon" 
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 rounded-full" 
                    onClick={() => removeFromWishlist(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove from wishlist</span>
                  </Button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/product/${product.id}`} className="hover:underline">
                      <h3 className="font-medium text-lg line-clamp-2">{product.name}</h3>
                    </Link>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">
                      ${product.isSale ? product.salePrice?.toFixed(2) : product.price.toFixed(2)}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-shopping-primary hover:bg-shopping-primary/90"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 space-y-4">
            <Heart className="mx-auto h-16 w-16 text-muted-foreground/50" />
            <h2 className="text-xl font-medium">Your wishlist is empty</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Browse our products and click the heart icon to save items to your wishlist.
            </p>
            <Button asChild className="mt-4 bg-shopping-primary hover:bg-shopping-primary/90">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default WishlistPage;
