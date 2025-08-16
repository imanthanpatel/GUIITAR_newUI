import { useRef, useEffect, useState } from 'react';
import { Brain, DollarSign, Beaker, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatWeOfferSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const offerings = [
    {
      title: "MENTORSHIP",
      icon: Brain,
      description: "World-class guidance from industry titans",
      color: "primary"
    },
    {
      title: "CAPITAL",
      icon: DollarSign,
      description: "Funding that fuels fearless innovation",
      color: "accent"
    },
    {
      title: "LABS",
      icon: Beaker,
      description: "State-of-the-art facilities for breakthrough R&D",
      color: "primary"
    },
    {
      title: "LOVE",
      icon: Heart,
      description: "Unwavering support through every pivot and triumph",
      color: "accent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="offer" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-24 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-hero mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Four pillars of transformation that turn audacious dreams into market-shifting realities
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="relative overflow-x-auto scrollbar-hide px-8 py-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex space-x-8 lg:space-x-12" style={{ width: 'max-content' }}>
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <div
                  key={offering.title}
                  className={`group relative w-80 lg:w-96 transform transition-all duration-700 hover-lift ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Main Card */}
                  <div className="glass rounded-3xl p-8 lg:p-10 h-80 flex flex-col justify-between">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl glass-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      offering.color === 'primary' ? 'glow-primary' : 'glow-accent'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        offering.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className={`text-4xl lg:text-5xl font-bold font-space mb-4 ${
                        offering.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}>
                        {offering.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {offering.description}
                      </p>
                    </div>

                    {/* Learn More for all tabs */}
                    <div className="flex items-center justify-between">
                      {offering.title === "LABS" ? (
                        <Link 
                          to="/labs" 
                          className="group/btn flex items-center space-x-2 text-foreground hover:text-primary smooth-transition"
                        >
                          <span className="font-medium">Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      ) : (
                        <button 
                          className="group/btn flex items-center space-x-2 text-foreground hover:text-primary smooth-transition cursor-pointer"
                          onClick={() => {
                            // Just show the button for now - no page navigation
                          }}
                        >
                          <span className="font-medium">Learn more</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Floating Accent */}
                  <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
                    offering.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  } opacity-80 group-hover:scale-125 transition-transform duration-300 float-gentle`} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className={`flex items-center justify-center mt-12 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="hidden lg:block w-12 h-px bg-gradient-to-r from-transparent to-muted-foreground/30" />
            <span className="text-sm font-medium tracking-wider">SCROLL HORIZONTALLY TO EXPLORE</span>
            <div className="hidden lg:block w-12 h-px bg-gradient-to-l from-transparent to-muted-foreground/30" />
          </div>
        </div>
      </div>

      {/* Add custom scrollbar hiding */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default WhatWeOfferSection;