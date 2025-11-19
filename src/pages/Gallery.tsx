// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const categories = ["All", "Commercial", "Educational", "Industrial", "Residential", "Healthcare"];

const galleryImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", category: "Commercial", title: "Office Complex" },
  { id: 2, url: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80", category: "Educational", title: "University Campus" },
  { id: 3, url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80", category: "Industrial", title: "Manufacturing Facility" },
  { id: 4, url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80", category: "Commercial", title: "Corporate HQ" },
  { id: 5, url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80", category: "Healthcare", title: "Hospital HVAC" },
  { id: 6, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80", category: "Residential", title: "Luxury Apartments" },
  { id: 7, url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80", category: "Commercial", title: "Data Center" },
  { id: 8, url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80", category: "Commercial", title: "Recording Studio" },
  { id: 9, url: "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80", category: "Commercial", title: "Shopping Mall" }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <section className="relative py-24 bg-gradient-to-br from-foreground to-foreground/90 text-background">
          <div className="container-custom">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl text-background/90">Explore our completed projects across various sectors</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <img src={image.url} alt={image.title} className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6 text-background">
                      <Badge className="mb-2">{image.category}</Badge>
                      <h3 className="text-xl font-bold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
