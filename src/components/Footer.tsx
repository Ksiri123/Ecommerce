import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer 
    className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-border/20 text-foreground"
  >
  
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-shopping-primary">ShopEase</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for all your shopping needs. Quality products at affordable prices.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-shopping-secondary">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/on-sale" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  On Sale
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-shopping-secondary">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/account/settings" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-shopping-secondary">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                123 Shop Street, City
              </li>
              <li className="text-sm text-muted-foreground">
                support@shopease.com
              </li>
              <li className="text-sm text-muted-foreground">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-shopping-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
