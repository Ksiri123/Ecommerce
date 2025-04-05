
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Menu, Search, ShoppingCart, X, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <nav className="flex flex-col gap-4">
                <Link to="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link to="/products" className="text-lg font-semibold">
                  Shop
                </Link>
                <Link to="/categories" className="text-lg font-semibold">
                  Categories
                </Link>
                <Link to="/about" className="text-lg font-semibold">
                  About
                </Link>
                <Link to="/contact" className="text-lg font-semibold">
                  Contact
                </Link>
                <Link to="/wishlist" className="text-lg font-semibold">
                  Wishlist
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center gap-2">
          <span className="text-4xl font-bold text-blue-900">ShopEase</span>
            
          </Link> 

        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center gap-2">
          {searchVisible ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] sm:w-[300px]"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0"
                onClick={() => setSearchVisible(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchVisible(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          
        
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
              {wishlist.length > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-shopping-primary text-[10px] font-medium text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-shopping-primary text-[10px] font-medium text-white">
                {itemCount}
              </span>
            )}
          </Button>
          <Button variant="ghost" size="icon" asChild>
  <Link to="/account" className="flex items-center justify-center">
    <Avatar className="h-5 w-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyUR87vPNdBAuPoSLPNl-nXzyYAepDsydIgtjq0jAJDY6fnMGG2JIIDo&usqp=CAE&s"
        alt="Profile"
        className="h-5 w-5 rounded-full object-cover"
      />
    </Avatar>
    <span className="sr-only">Account</span>
  </Link>
</Button>
   
        </div>
      </div>
      
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
