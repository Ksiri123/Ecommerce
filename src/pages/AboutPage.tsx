
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main 
        className="container py-8 
        bg-gradient-to-br from-emerald-50 via-teal-100/50 to-cyan-200/30 
        animate-fade-in"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 transform transition-all duration-700 hover:scale-105">
            <h1 
              className="text-3xl md:text-6xl font-bold mb-4 
              bg-gradient-to-r from-blue-600 to-blue-400 
              bg-clip-text text-transparent
              animate-slide-in-right"
            >
              About ShopEase
            </h1>
            <p 
              className="text-blue-800/80 max-w-xl mx-auto 
              animate-fade-in delay-200"
            >
              Your trusted online shopping destination since 2015
            </p>
          </div>

          <div 
            className="grid md:grid-cols-2 gap-8 mb-12 
            transform transition-all duration-500 hover:scale-[1.02]"
          >
            <div 
              className="space-y-4 
              animate-slide-in-right delay-300 
              hover:bg-white/10 hover:backdrop-blur-sm 
              p-6 rounded-lg transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                ShopEase was founded with a simple mission: to make online 
                shopping easy, enjoyable, and accessible to everyone. What 
                started as a small startup has grown into a trusted 
                e-commerce platform serving customers worldwide.
              </p>
              <p className="text-muted-foreground">
                Our team is dedicated to curating high-quality products at 
                competitive prices while providing exceptional customer service 
                every step of the way.
              </p>
            </div>
            <div 
              className="rounded-lg overflow-hidden h-64 
              animate-slide-in-right delay-500 
              hover:scale-105 transition-transform duration-300 
              shadow-lg hover:shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Separator className="my-12" />

          <div className="mb-12 overflow-hidden">
            <h2 
              className="text-2xl font-semibold mb-6 text-center 
              animate-slide-in-right delay-700"
            >
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {["Quality", "Affordability", "Sustainability"].map((value, index) => (
                <div 
                  key={value} 
                  className="border rounded-lg p-6 text-center 
                  hover:bg-white/10 hover:backdrop-blur-sm 
                  transition-all duration-500 transform 
                  hover:-translate-y-2 hover:shadow-lg
                  animate-slideUp"
                  style={{ animationDelay: `${(index + 1) * 300}ms` }}
                >
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-shopping-primary/40 to-shopping-accent/40 flex items-center justify-center">
                    <span className="text-2xl font-bold text-shopping-primary">
                      {value.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3 
                    text-transparent bg-clip-text bg-gradient-to-r from-shopping-primary to-shopping-accent">{value}</h3>
                  <p className="text-muted-foreground">
                    {value === "Quality" && "We carefully select each product to ensure it meets our high standards."}
                    {value === "Affordability" && "We believe great products should be accessible to everyone."}
                    {value === "Sustainability" && "We're committed to reducing our environmental impact."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Natasha Divines</h3>
                <p className="text-sm text-muted-foreground">CEO & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=vzbLXgg1SOYducAwaK8cWgUNKqMMJtTu5xYWbZE-TNA=" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">K Shireesha </h3>
                <p className="text-sm text-muted-foreground">CTO</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Telugu Amruta</h3>
                <p className="text-sm text-muted-foreground">Design Director</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2lybCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
                    alt="Team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold">Yamala Sonisree</h3>
                <p className="text-sm text-muted-foreground">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
