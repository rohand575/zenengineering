// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background">
          <div className="container-custom">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-background/90">Let's discuss your project requirements</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project..." rows={6} className="mt-2" />
                  </div>
                  <Button size="lg" className="w-full">Send Message</Button>
                </form>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Office Locations</h4>
                        <p className="text-muted-foreground">Pune | Kolhapur | Sangli<br />Maharashtra, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+919610029008" className="text-muted-foreground hover:text-primary">+91 96100 29008</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:sales@zenengineerings.com" className="text-muted-foreground hover:text-primary">sales@zenengineerings.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
