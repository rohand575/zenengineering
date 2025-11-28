// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";


// --- Consistent Dark Theme Constants from About.tsx ---
const DARK_BG = "#050A14"; 
const SECONDARY_BG = "#0B1120"; 
const TEXT_MUTED_DARK = "text-slate-400"; 
const TEXT_LIGHT = "text-white";
const BORDER_DARK = "border-white/10"; 
const ACCENT_COLOR_CLASS = "text-blue-400"; 
const GLASS_CARD_BASE = `border ${BORDER_DARK} bg-white/5 backdrop-blur-lg`;
const INPUT_GLASS_STYLE = `border ${BORDER_DARK} bg-white/5 backdrop-blur-sm text-white focus-visible:ring-blue-500 focus-visible:border-blue-500`;

const Contact = () => {
  return (
    // Set the overall container background to the DARK_BG color for uniformity
    <div className={`min-h-screen bg-[${DARK_BG}]`}>

      <Helmet>
        <title>Contact Us | Zen Engineering Solutions</title>
        <meta
          name="description"
          content="Contact Zen Engineering Solutions for Acoustic, HVAC, Insulation, and turnkey engineering services. Offices in Pune, Kolhapur & Sangli. Reach us via phone, WhatsApp, or email."
        />
      </Helmet>
      {/* <Header /> */}
      <main>
        {/* =======================================================================================
           1. Hero Section - Adapted for Dark Theme 
           ======================================================================================= */}
        <section className={`relative py-24 bg-[${SECONDARY_BG}] border-b ${BORDER_DARK} ${TEXT_LIGHT} overflow-hidden`}>
          
          {/* Subtle Glow/Spotlight effect */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />
          
          <div className="container-custom relative z-10">
            <span className={`${ACCENT_COLOR_CLASS} font-semibold text-sm uppercase tracking-wider mb-3 block`}>
              We're Here to Help
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get In <span className={`${ACCENT_COLOR_CLASS} drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]`}>Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
              Reach out for site visits, project consultations, quotations and BOQs, HVAC and acoustic planning, installation, and support services. We respond to all inquiries within 24 hours.
            </p>
          </div>
        </section>

        {/* =======================================================================================
           2. Contact Form & Info Section - Adapted for Dark Theme 
           ======================================================================================= */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* --- 2A. Send Us a Message (Form) --- */}
              <div className="animate-slide-up">
                <h2 className={`text-3xl font-bold mb-8 ${TEXT_LIGHT}`}>
                  Send Us a <span className={ACCENT_COLOR_CLASS}>Message</span>
                </h2>
                
                {/* Form Wrapper - Styled as a subtle glass element */}
                <form 
                  // >>> FORM SUBMISSION CONFIGURATION FOR FORMSUBMIT <<<
                  action="https://formsubmit.co/rohan.dhanawade97@gmail.com" 
                  method="POST" 
                  className={`space-y-6 p-8 rounded-xl ${GLASS_CARD_BASE} shadow-2xl shadow-black/50`}
                >
                  
                  {/* HIDDEN FIELDS for FormSubmit configuration */}
                  {/* Set the subject line for the email you receive */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Website!" />
                  {/* Redirect the user to a success page after submission (change the URL below) */}
                  <input type="hidden" name="_next" value="/thank-you" />
                  
                  {/* Full Name */}
                  <div>
                    <Label htmlFor="name" className={TEXT_LIGHT}>Full Name</Label>
                    {/* ADDED name="Name" and required */}
                    <Input 
                      id="name" 
                      name="Name" 
                      placeholder="John Doe" 
                      className={`mt-2 ${INPUT_GLASS_STYLE}`} 
                      required 
                    />
                  </div>
                  
                  {/* Email Address */}
                  <div>
                    <Label htmlFor="email" className={TEXT_LIGHT}>Email Address</Label>
                    {/* ADDED name="Email" and required */}
                    <Input 
                      id="email" 
                      name="Email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className={`mt-2 ${INPUT_GLASS_STYLE}`} 
                      required 
                    />
                  </div>
                  
                  {/* Phone Number */}
                  <div>
                    <Label htmlFor="phone" className={TEXT_LIGHT}>Phone Number</Label>
                    {/* ADDED name="Phone" */}
                    <Input 
                      id="phone" 
                      name="Phone" 
                      placeholder="+91 98765 43210" 
                      className={`mt-2 ${INPUT_GLASS_STYLE}`} 
                    />
                  </div>
                  
                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className={TEXT_LIGHT}>Message</Label>
                    {/* ADDED name="Message" and required */}
                    <Textarea 
                      id="message" 
                      name="Message" 
                      placeholder="Tell us about your project..." 
                      rows={6} 
                      className={`mt-2 ${INPUT_GLASS_STYLE}`} 
                      required 
                    />
                  </div>
                  
                  {/* Submit Button - Ensure type="submit" */}
                  <Button 
                    type="submit" // Explicitly set the type to submit
                    size="lg" 
                    className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 rounded-lg shadow-lg shadow-blue-500/40 group"
                  >
                    Send Message <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* --- 2B. Contact Information --- */}
              <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <h2 className={`text-3xl font-bold mb-8 ${TEXT_LIGHT}`}>
                  Contact <span className={ACCENT_COLOR_CLASS}>Information</span>
                </h2>
                
                {/* Contact Info Card - Styled as a prominent glass element */}
                <Card className={`border-none ${GLASS_CARD_BASE} shadow-2xl shadow-black/50`}>
                  <CardContent className="p-6 md:p-8 space-y-8">
                    
                    {/* Office Locations */}
                    <div className="flex items-start gap-4">
                      <MapPin className={`h-6 w-6 ${ACCENT_COLOR_CLASS} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className={`font-semibold mb-1 ${TEXT_LIGHT}`}>Office Locations</h4>
                        <div className={`${TEXT_MUTED_DARK} space-y-3`}>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Flat+No.+001%2C+Shree+Ram+Siddhi+Apartment%2C+100+Feet+Road%2C+near+Chetna+Petrol+Pump%2C+Sangli+416416"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block leading-relaxed hover:text-blue-300 transition-colors"
                          >
                            <strong>Sangli (Head Office):</strong> Flat No. 001, Shree Ram Siddhi Apartment, 100 Feet Road, near Chetna Petrol Pump, Sangli - 416416
                          </a>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=SofX%2C+Below+Bank+of+Baroda%2C+Ruikar+Colony%2C+E-Ward%2C+Kolhapur+416005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block leading-relaxed hover:text-blue-300 transition-colors"
                          >
                            <strong>Kolhapur:</strong> SofX - Below Bank of Baroda, Ruikar Colony, E-Ward, Kolhapur - 416005
                          </a>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=Trimurti+Bungalow%2C+Unit+No.+2%2C+Plot+No.+38%2C+Gananjay+Housing+Society%2C+Gandhi+Bhavan+Road%2C+Kothrud%2C+Pune+411038"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block leading-relaxed hover:text-blue-300 transition-colors"
                          >
                            <strong>Pune:</strong> Trimurti Bungalow, Unit No. 2, Plot No. 38, Gananjay Housing Society, Gandhi Bhavan Road, Kothrud, Pune - 411038
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <Phone className={`h-6 w-6 ${ACCENT_COLOR_CLASS} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className={`font-semibold mb-1 ${TEXT_LIGHT}`}>Phone</h4>
                        <a href="tel:+919610029008" className={`text-blue-300 hover:text-blue-500 transition-colors`}>+91 96100 29008</a>
                      </div>
                    </div>

                    {/* WhatsApp - CHECK THIS SECTION */}
                    <div className="flex items-start gap-4">
                      <MessageSquare className={`h-6 w-6 ${ACCENT_COLOR_CLASS} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className={`font-semibold mb-1 ${TEXT_LIGHT}`}>WhatsApp</h4>
                        <a 
                          href="https://wa.me/917709022575" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`text-blue-300 hover:text-blue-500 transition-colors`}
                        >
                          +91 77090 22575 (Chat Now)
                        </a>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <Mail className={`h-6 w-6 ${ACCENT_COLOR_CLASS} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className={`font-semibold mb-1 ${TEXT_LIGHT}`}>Email</h4>
                        <a href="mailto:sales@zenengineerings.com" className={`text-blue-300 hover:text-blue-500 transition-colors`}>sales@zenengineerings.com</a>
                      </div>
                    </div>
                    
                    {/* Business Hours */}
                    <div className="flex items-start gap-4">
                      <Clock className={`h-6 w-6 ${ACCENT_COLOR_CLASS} flex-shrink-0 mt-1`} />
                      <div>
                        <h4 className={`font-semibold mb-1 ${TEXT_LIGHT}`}>Business Hours</h4>
                        <p className={TEXT_MUTED_DARK}>Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Optional: Embed Map Placeholder */}
                <div className={`h-72 w-full rounded-xl mt-8 overflow-hidden border ${BORDER_DARK} shadow-2xl shadow-black/50`}>
                    <img 
                      src="https://via.placeholder.com/600x400.png?text=Map+Embed+Placeholder" 
                      alt="Map Location Placeholder" 
                      className="w-full h-full object-cover opacity-80"
                    />
                </div>

                <p className="text-slate-300 mt-6">
                  We&apos;re here to engineer comfort, performance, and long-lasting reliability for your space.
                </p>
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
