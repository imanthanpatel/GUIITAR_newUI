import { useState, useEffect } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';

const PictureCollageSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('collage');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="collage" className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      {/* Background Bubbles */}
      <div className="absolute inset-0">
        {/* Large bubbles */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary/10 blur-xl float-gentle" />
        <div className="absolute top-20 right-16 w-24 h-24 rounded-full bg-accent/15 blur-lg float-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-40 h-40 rounded-full bg-primary/8 blur-2xl float-gentle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-16 right-10 w-28 h-28 rounded-full bg-accent/12 blur-xl float-gentle" style={{ animationDelay: '3s' }} />
        
        {/* Medium bubbles */}
        <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full bg-primary/20 blur-md float-gentle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/3 right-8 w-20 h-20 rounded-full bg-accent/18 blur-lg float-gentle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-primary/25 blur-sm float-gentle" style={{ animationDelay: '2.5s' }} />
        
        {/* Small bubbles */}
        <div className="absolute top-16 left-1/3 w-8 h-8 rounded-full bg-accent/30 float-gentle" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-2/3 left-12 w-6 h-6 rounded-full bg-primary/35 float-gentle" style={{ animationDelay: '1.8s' }} />
        <div className="absolute bottom-20 left-1/2 w-10 h-10 rounded-full bg-accent/25 float-gentle" style={{ animationDelay: '2.8s' }} />
        <div className="absolute top-40 right-1/3 w-14 h-14 rounded-full bg-primary/20 blur-sm float-gentle" style={{ animationDelay: '3.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold font-space mb-4">
              Our <span className="text-accent">Innovation</span> Journey
            </h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Witness the transformation of ideas into reality through our vibrant community
            </p>
          </div>

          {/* Picture Collage */}
          <div className="relative">
            {/* Main collage grid */}
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[400px] lg:h-[450px]">
              {/* Large center image */}
              <div className="col-span-2 row-span-2 col-start-2 row-start-1 relative group">
                <img
                  src={gallery1}
                  alt="Innovation Summit 2024"
                  className="w-full h-full object-cover rounded-2xl glass hover-lift transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">Innovation Summit 2024</h3>
                </div>
              </div>

              {/* Top left */}
              <div className="col-span-1 row-span-1 relative group">
                <img
                  src={gallery2}
                  alt="Tech Demo Day"
                  className="w-full h-full object-cover rounded-xl glass hover-lift transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>

              {/* Top right */}
              <div className="col-span-1 row-span-1 relative group">
                <img
                  src={gallery3}
                  alt="Startup Pitch Competition"
                  className="w-full h-full object-cover rounded-xl glass hover-lift transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>

              {/* Bottom left */}
              <div className="col-span-1 row-span-1 relative group">
                <img
                  src={gallery4}
                  alt="Founders Networking Event"
                  className="w-full h-full object-cover rounded-xl glass hover-lift transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>

              {/* Bottom center */}
              <div className="col-span-1 row-span-1 relative group">
                <img
                  src={gallery5}
                  alt="Excellence Awards Ceremony"
                  className="w-full h-full object-cover rounded-xl glass hover-lift transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>

            </div>

            {/* Floating decorative elements around collage */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent opacity-60 float-gentle" />
            <div className="absolute -top-2 -right-6 w-6 h-6 rounded-full bg-primary opacity-50 float-gentle" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-4 -left-2 w-10 h-10 rounded-full bg-accent opacity-40 float-gentle" style={{ animationDelay: '2s' }} />
            <div className="absolute -bottom-6 -right-4 w-7 h-7 rounded-full bg-primary opacity-55 float-gentle" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 -left-6 w-5 h-5 rounded-full bg-accent opacity-45 float-gentle" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/3 -right-8 w-9 h-9 rounded-full bg-primary opacity-35 float-gentle" style={{ animationDelay: '2.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PictureCollageSection;