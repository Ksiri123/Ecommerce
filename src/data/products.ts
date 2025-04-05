import { Product, Category } from "../types";

export const categories: Category[] = [
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "books", name: "Books" },
  { id: "home", name: "Home & Kitchen" },
  { id: "beauty", name: "Beauty & Personal Care" }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    isNew: true
  },
  {
    id: "2",
    name: "Smart Watch Series 5",
    price: 299.99,
    description: "Latest generation smartwatch with health monitoring and GPS.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    rating: 4.3
  },
  {
    id: "3",
    name: "Men's Classic Fit Shirt",
    price: 49.99,
    description: "Comfortable and stylish classic fit shirt for all occasions.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=500&auto=format&fit=crop&q=60",
    rating: 4.0,
    isSale: true,
    salePrice: 39.99
  },
  {
    id: "4",
    name: "Women's Running Shoes",
    price: 89.99,
    description: "Lightweight and comfortable running shoes with extra cushioning.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60",
    rating: 4.8
  },
  {
    id: "5",
    name: "The Art of Programming",
    price: 29.99,
    description: "A comprehensive guide to modern programming practices.",
    category: "books",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
    rating: 4.9
  },
  {
    id: "6",
    name: "Kitchen Blender",
    price: 79.99,
    description: "Powerful 1000W blender for smoothies and food preparation.",
    category: "home",
    image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&auto=format&fit=crop&q=60",
    rating: 4.2,
    isNew: true
  },
  {
    id: "7",
    name: "Face Moisturizer",
    price: 24.99,
    description: "Hydrating face cream with vitamin E and natural extracts.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?w=500&auto=format&fit=crop&q=60",
    rating: 4.6,
    isSale: true,
    salePrice: 19.99
  },
  {
    id: "8",
    name: "Fitness Tracker",
    price: 59.99,
    description: "Track your steps, heart rate, and sleep patterns.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=60",
    rating: 4.1
  },
  {
    id: "9",
    name: "Denim Jeans",
    price: 69.99,
    description: "Classic denim jeans with comfortable stretch fit.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: "10",
    name: "Coffee Maker",
    price: 129.99,
    description: "Programmable coffee maker with thermal carafe.",
    category: "home",
    image: "https://plus.unsplash.com/premium_photo-1661722983090-11783531c332?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmUlMjBtYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    isSale: true,
    salePrice: 99.99
  },
  {
    id: "11",
    name: "Wireless Charging Pad",
    price: 29.99,
    description: "Fast wireless charging for compatible devices.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1583863788171-5b9a31b21fa4?w=500&auto=format&fit=crop&q=60",
    rating: 4.0
  },
  {
    id: "12",
    name: "Bestselling Novel Collection",
    price: 49.99,
    description: "Collection of top 5 bestselling novels of the year.",
    category: "books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    isNew: true
  },
  {
    id: "13",
    name: "Smartphone Pro Max",
    price: 899.99,
    description: "Latest flagship smartphone with 6.7-inch display, triple camera system, and all-day battery life.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format&fit=crop&q=60",
    rating: 4.7,
    isNew: true
  },
  {
    id: "14",
    name: "Tablet Ultra Slim",
    price: 449.99,
    description: "Lightweight tablet with stunning display and powerful processor for work and entertainment.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1544344306-6e987dfc7449?w=500&auto=format&fit=crop&q=60",
    rating: 4.5
  },
  {
    id: "15",
    name: "Wireless Earbuds",
    price: 129.99,
    description: "True wireless earbuds with active noise cancellation and crystal-clear sound quality.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
    rating: 4.6,
    isSale: true,
    salePrice: 99.99
  },
  {
    id: "16",
    name: "Designer Handbag",
    price: 199.99,
    description: "Elegant leather handbag with multiple compartments and adjustable shoulder strap.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=60",
    rating: 4.4
  },
  {
    id: "17",
    name: "Winter Coat",
    price: 179.99,
    description: "Warm and stylish winter coat with water-resistant outer shell and plush lining.",
    category: "clothing",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&auto=format&fit=crop&q=60",
    rating: 4.3,
    isSale: true,
    salePrice: 149.99
  },
  {
    id: "18",
    name: "Classic Novels Box Set",
    price: 79.99,
    description: "Collection of 10 timeless classic novels in a beautiful hardcover box set.",
    category: "books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
    rating: 4.9
  },
  {
    id: "19",
    name: " laptop, smartphone and tablet.",
    price: 34.99,
    description: "Curated collection of the best modern science fiction short stories from award-winning authors.",
    category: "books",
    image: "https://media.istockphoto.com/id/185278319/photo/mobile-computing-devices-with-blue-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=U8PwBtmcDs5mWjUUNQX9Tqu4QoTXZXyKkhxei2BTqSY=",
    rating: 4.7,
    isNew: true
  },
  {
    id: "20",
    name: "Smart Home Assistant",
    price: 129.99,
    description: "Voice-controlled smart home hub with built-in speaker and home automation capabilities.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjBob21lJTIwYXNzaXN0YW50fGVufDB8fDB8fHww",
    rating: 4.4
  },
  {
    id: "21",
    name: "Premium Cookware Set",
    price: 249.99,
    description: "Complete 12-piece nonstick cookware set with tempered glass lids and stay-cool handles.",
    category: "home",
    image: "https://plus.unsplash.com/premium_photo-1664391825760-17aacf4cb3b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJlbWl1bSUyMENvb2t3YXJlJTIwU2V0fGVufDB8fDB8fHww",
    rating: 4.8,
    isSale: true,
    salePrice: 199.99
  },
  {
    id: "22",
    name: "Luxury Bedding Set",
    price: 179.99,
    description: "Premium 100% Egyptian cotton bedding set including duvet cover, fitted sheet, and pillowcases.",
    category: "home",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: "23",
    name: "Smart LED Lighting Kit",
    price: 89.99,
    description: "Customizable smart lighting system with app control, voice commands, and millions of colors.",
    category: "home",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    isNew: true
  },
  {
    id: "24",
    name: "Anti-Aging Serum",
    price: 59.99,
    description: "Advanced formula with hyaluronic acid and vitamins to reduce fine lines and improve skin texture.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1571781418606-70265b9cce90?w=500&auto=format&fit=crop&q=60",
    rating: 4.7
  },
  {
    id: "25",
    name: "Luxury Perfume",
    price: 129.99,
    description: "Sophisticated fragrance with notes of jasmine, bergamot, and sandalwood in an elegant bottle.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1?w=500&auto=format&fit=crop&q=60",
    rating: 4.8,
    isSale: true,
    salePrice: 99.99
  },
  {
    id: "26",
    name: "Professional Hair Dryer",
    price: 149.99,
    description: "Salon-quality hair dryer with ionic technology and multiple heat and speed settings.",
    category: "beauty",
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  },
  {
    id: "27",
    name: "Wireless Gaming Mouse",
    price: 79.99,
    description: "High-performance gaming mouse with programmable buttons and customizable RGB lighting.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60",
    rating: 4.5,
    isNew: true
  },
  {
    id: "28",
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "Tactile mechanical keyboard with RGB backlighting and programmable keys for gaming and typing.",
    category: "electronics",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60",
    rating: 4.6
  }
];
