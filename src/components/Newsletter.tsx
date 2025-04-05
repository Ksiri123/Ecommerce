
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing to our newsletter!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };
  
  return (
    <section className="py-12 bg-shopping-primary/5">
      <div className="container text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter for exclusive offers and the latest updates.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-shopping-primary hover:bg-shopping-primary/90"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
