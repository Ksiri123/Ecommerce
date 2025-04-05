
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-shopping-primary/10 to-shopping-accent/10 py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Shop the Latest <span className="text-shopping-primary">Trends</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Discover our curated collection of premium products at unbeatable prices. Free shipping on orders over $50.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-shopping-primary hover:bg-shopping-primary/90"
              asChild
            >
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <Link to="/new-arrivals">New Arrivals</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg animate-fadeIn shadow-lg overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&auto=format&fit=crop&q=60" 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
