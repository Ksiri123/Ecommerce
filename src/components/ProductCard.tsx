
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { StarIcon, Heart, HeartOff } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const displayPrice = product.isSale 
    ? <div className="flex gap-2">
        <span className="font-semibold text-shopping-accent">${product.salePrice?.toFixed(2)}</span>
        <span className="line-through text-muted-foreground">${product.price.toFixed(2)}</span>
      </div>
    : <span className="font-semibold">${product.price.toFixed(2)}</span>;

  return (
    <Card className="overflow-hidden product-card-hover">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <AspectRatio ratio={1/1} className="bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image object-cover transition-transform hover:scale-105"
              loading="lazy"
            />
          </AspectRatio>
        </Link>
        {product.isNew && <span className="badge-new">New</span>}
        {product.isSale && <span className="badge-sale">Sale</span>}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full" 
          onClick={handleWishlistToggle}
        >
          {isInWishlist(product.id) ? (
            <Heart className="h-5 w-5 text-shopping-accent fill-shopping-accent" />
          ) : (
            <Heart className="h-5 w-5" />
          )}
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`} className="hover:underline">
            <h3 className="font-medium text-lg line-clamp-2">{product.name}</h3>
          </Link>
          <div className="flex items-center text-shopping-secondary">
            <StarIcon className="h-4 w-4 fill-current" />
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          {displayPrice}
          <Button 
            size="sm"
            className="bg-shopping-primary hover:bg-shopping-primary/90"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
