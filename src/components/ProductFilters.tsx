
import { useState, useEffect } from "react";
import { categories } from "@/data/products";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface ProductFiltersProps {
  onFilterChange: (filters: {
    categories: string[];
    priceRange: [number, number];
    onlyNew: boolean;
    onlyOnSale: boolean;
    minRating: number;
    searchTerm: string;
  }) => void;
  maxPrice: number;
}

export function ProductFilters({ onFilterChange, maxPrice }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);
  const [onlyNew, setOnlyNew] = useState<boolean>(false);
  const [onlyOnSale, setOnlyOnSale] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    onFilterChange({
      categories: selectedCategories,
      priceRange,
      onlyNew,
      onlyOnSale,
      minRating,
      searchTerm
    });
  }, [selectedCategories, priceRange, onlyNew, onlyOnSale, minRating, searchTerm, onFilterChange]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, maxPrice]);
    setOnlyNew(false);
    setOnlyOnSale(false);
    setMinRating(0);
    setSearchTerm("");
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full"
            onClick={() => setSearchTerm("")}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div>
        <h3 className="font-medium mb-2">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={selectedCategories.includes(category.id) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Price Range</h3>
        <Slider
          defaultValue={[0, maxPrice]}
          max={maxPrice}
          step={1}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="my-6"
        />
        <div className="flex items-center justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium mb-2">Filters</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="new"
            checked={onlyNew}
            onCheckedChange={(checked) => setOnlyNew(checked === true)}
          />
          <Label htmlFor="new">New Arrivals</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="sale"
            checked={onlyOnSale}
            onCheckedChange={(checked) => setOnlyOnSale(checked === true)}
          />
          <Label htmlFor="sale">On Sale</Label>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Minimum Rating: {minRating}</h3>
        <Slider
          defaultValue={[0]}
          max={5}
          step={0.5}
          value={[minRating]}
          onValueChange={(value) => setMinRating(value[0])}
        />
      </div>

      <Button 
        variant="outline" 
        onClick={resetFilters}
        className="w-full"
      >
        Reset Filters
      </Button>
    </div>
  );
}
