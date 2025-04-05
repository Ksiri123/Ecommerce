
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="container py-16 md:py-24 flex flex-col items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-7xl md:text-9xl font-bold text-shopping-primary">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="mt-4 bg-shopping-primary hover:bg-shopping-primary/90">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
