import { useState, useEffect } from 'react';
import { Zap, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Autoplay from 'embla-carousel-autoplay';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import signin from '@/pages/SignIn';

const GrantsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredGrant, setHoveredGrant] = useState<number | null>(null); // Explicit type for hoveredGrant
  const navigate = useNavigate(); // Initialize navigate hook

  const handleApplyNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent grant expansion
    navigate('/signin');
  };

  const galleryImages = [
    { src: gallery1, alt: 'Modern tech startup office with diverse team collaboration', name: 'Innovation Summit 2024' },
    { src: gallery2, alt: 'Innovation lab with cutting-edge technology', name: 'Tech Demo Day' },
    { src: gallery3, alt: 'Entrepreneurs presenting at pitch event', name: 'Startup Pitch Competition' },
    { src: gallery4, alt: 'Young entrepreneurs in creative coworking space', name: 'Founders Networking Event' },
    { src: gallery5, alt: 'Award ceremony with startup founders', name: 'Excellence Awards Ceremony' },
  ];

  const grants = [
    {
      title: 'Nodal Grant',
      amount: '30Lac',
      description: 'Fuel your startup’s first spark into a blazing innovation',
      color: 'primary',
      applicants: 847,
      success: '12%',
    },
    {
      title: 'Ipr Grant',
      amount: '5Lac',
      description: 'Scale your proven concept into market dominance',
      color: 'accent',
      applicants: 342,
      success: '8%',
    },
    {
      title: 'SSIP Grant',
      amount: '2.5Lac',
      description: 'Revolutionary breakthroughs that reshape entire industries',
      color: 'primary',
      applicants: 123,
      success: '3%',
    },
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

    const element = document.getElementById('grants');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="grants" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 aurora-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Gallery Section */}
        <div
          className={`text-center mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold font-space mb-8">
            Check Our <span className="text-accent">Gallery</span>
          </h2>

          <div className="relative max-w-5xl mx-auto">
            <Carousel
              className="w-full"
              opts={{ align: 'start', loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative overflow-hidden rounded-2xl glass hover-lift">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="p-4 bg-background/80 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold text-foreground text-center">{image.name}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Previous slide"
                className="glass border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
              />
              <CarouselNext
                aria-label="Next slide"
                className="glass border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground"
              />
            </Carousel>
          </div>
        </div>

        {/* Section Header */}
        <div
          className={`text-center mb-16 lg:mb-24 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-hero mb-6">
            <span className="text-accent">Grants</span> That Change Lives
          </h2>
          <p className="text-subtitle max-w-3xl mx-auto">
            Not just funding—we’re offering you the keys to transformation. Each grant is a gateway to turning impossible
            into inevitable.
          </p>
        </div>

        {/* Floating Grant Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {grants.map((grant, index) => (
            <div
              key={grant.title}
              className={`group relative transform transition-all duration-700 hover-lift ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'}) ${isVisible ? 'translateY(0)' : 'translateY(20px)'}`,
              }}
              onMouseEnter={() => setHoveredGrant(index)}
              onMouseLeave={() => setHoveredGrant(null)}
            >
              {/* Main Grant Card */}
              <div
                className={`glass rounded-3xl p-8 lg:p-10 relative overflow-hidden ${
                  hoveredGrant === index ? 'scale-105' : ''
                } smooth-transition`}
              >
                {/* Floating Amount Badge */}
                <div
                  className={`absolute -top-3 -right-3 w-20 h-20 rounded-full flex items-center justify-center font-bold text-sm ${
                    grant.color === 'primary' ? 'bg-primary text-primary-foreground glow-primary' : 'bg-accent text-accent-foreground glow-accent'
                  } float-gentle`}
                >
                  {grant.amount}
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold font-space mb-2">{grant.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">{grant.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="glass-subtle rounded-xl p-4">
                    <div className="text-2xl font-bold text-foreground">{grant.applicants}</div>
                    <div className="text-sm text-muted-foreground">Applicants</div>
                  </div>
                  <div className="glass-subtle rounded-xl p-4">
                    <div className="text-2xl font-bold text-foreground">{grant.success}</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleApplyNow}
                  className={`w-full group/btn flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold smooth-transition ${
                    grant.color === 'primary' ? 'btn-primary' : 'btn-accent'
                  }`}
                  aria-label={`Apply for ${grant.title}`}
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                    grant.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`}
                />
              </div>

              {/* Floating Decorative Elements */}
              <div
                className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full ${
                  grant.color === 'primary' ? 'bg-accent' : 'bg-primary'
                } opacity-60 group-hover:scale-150 transition-transform duration-500 float-gentle`}
                style={{ animationDelay: '2s' }}
              />
              <div
                className={`absolute -top-1 left-1/3 w-4 h-4 rounded-full ${
                  grant.color === 'primary' ? 'bg-accent' : 'bg-primary'
                } opacity-40 group-hover:scale-125 transition-transform duration-500 float-gentle`}
                style={{ animationDelay: '4s' }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 lg:mt-24 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <Link to="/grants" className="btn-ghost group flex items-center space-x-3 mx-auto">
            <span>View All Grant Programs</span>
            <Zap className="w-5 h-5 group-hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrantsSection;