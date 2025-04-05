
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User, CreditCard, Settings } from "lucide-react";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <User className="h-12 w-12 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">My Account</h1>
              <p className="text-muted-foreground">
                Manage your account details and preferences
              </p>
            </div>
          </div>

          <Tabs defaultValue="orders">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="orders" className="flex gap-2">
                <Package className="h-4 w-4" />
                <span className="hidden sm:inline">Orders</span>
              </TabsTrigger>
              <TabsTrigger value="profile" className="flex gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden sm:inline">Payments</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex gap-2">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="orders" className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
              <div className="text-center py-12 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="mb-4">You haven't placed any orders yet</p>
                <Button asChild>
                  <a href="/products">Start Shopping</a>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="profile" className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
              <div className="grid gap-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Full Name</h3>
                  <div className="border rounded-md p-3">K Shireesha</div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Email Address</h3>
                  <div className="border rounded-md p-3">kshireesha07@gmail.com</div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Phone Number</h3>
                  <div className="border rounded-md p-3">(123) 456-7890</div>
                </div>
                <div className="mt-4">
                  <Button>Edit Profile</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="payments" className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
              <div className="text-center py-12 text-muted-foreground">
                <CreditCard className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="mb-4">No payment methods added yet</p>
                <Button>Add Payment Method</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Email Notifications</h3>
                  <Separator className="my-2" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Order updates</span>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Promotions and deals</span>
                      <input type="checkbox" className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Account activity</span>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Privacy Settings</h3>
                  <Separator className="my-2" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Make profile public</span>
                      <input type="checkbox" className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Show order history</span>
                      <input type="checkbox" className="toggle" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button>Save Settings</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
