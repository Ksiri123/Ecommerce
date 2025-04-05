
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const CategoriesPage = () => {
  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  // Count products per category
  const categoryCount = categories.reduce((counts, category) => {
    counts[category] = products.filter(product => product.category === category).length;
    return counts;
  }, {} as Record<string, number>);

  return (
    <>
      <Header />
      <main className="container py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Product Categories</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of product categories to find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category} 
              to={`/products?category=${category}`}
              className="group"
            >
              <div className="border rounded-lg overflow-hidden h-full hover:border-shopping-primary transition-colors">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-3xl text-muted-foreground capitalize">{category}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl capitalize group-hover:text-shopping-primary transition-colors">
                    {category}
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    {categoryCount[category]} products available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CategoriesPage;
