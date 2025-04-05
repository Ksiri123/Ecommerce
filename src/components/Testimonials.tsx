
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Natasha Divines",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    title: "Happy Customer",
    testimonial: "I absolutely love shopping here! The products are high-quality and shipping is always fast. Customer service is excellent too.",
    rating: 5
  },
  {
    id: "2",
    name: "K Shireesha",
    avatar: "https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=vzbLXgg1SOYducAwaK8cWgUNKqMMJtTu5xYWbZE-TNA=",
    title: "Regular Shopper",
    testimonial: "Great selection of products at reasonable prices. I've been a loyal customer for over a year now and have never been disappointed.",
    rating: 5
  },
  {
    id: "3",
    name: "Yamala Sonisree",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    title: "First-time Buyer",
    testimonial: "My first order arrived earlier than expected and the quality exceeded my expectations. Will definitely shop here again!",
    rating: 4
  }
];

export function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6 pb-4 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-shopping-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-shopping-primary text-white text-lg">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
                <div className="flex mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-shopping-secondary fill-shopping-secondary" : "text-muted"}`} 
                    />
                  ))}
                </div>
                <p className="text-muted-foreground flex-grow italic">{'"'}{testimonial.testimonial}{'"'}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
