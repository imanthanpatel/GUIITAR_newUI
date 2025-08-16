import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Video, BookOpen, Users, Download, ExternalLink, Star, Calendar, Clock } from 'lucide-react';

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const resourceCategories = [
    {
      id: 'startup-guides',
      title: 'Startup Guides',
      icon: FileText,
      color: 'primary',
      description: 'Step-by-step guides for building successful startups',
      count: 12,
      badge: 'Essential',
      resources: [
        { name: 'The Lean Startup Methodology', type: 'PDF', popular: true },
        { name: 'Fundraising Deck Template', type: 'Template', popular: true },
        { name: 'Market Research Framework', type: 'Guide', popular: false },
        { name: 'Product-Market Fit Checklist', type: 'Checklist', popular: true }
      ]
    },
    {
      id: 'legal-templates',
      title: 'Legal Templates',
      icon: BookOpen,
      color: 'accent',
      description: 'Ready-to-use legal documents and contracts',
      count: 8,
      badge: 'Popular',
      resources: [
        { name: 'Co-founder Agreement Template', type: 'Template', popular: true },
        { name: 'Terms of Service Generator', type: 'Tool', popular: false },
        { name: 'Privacy Policy Template', type: 'Template', popular: false },
        { name: 'Employment Contract Template', type: 'Template', popular: true }
      ]
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorials',
      icon: Video,
      color: 'primary',
      description: 'Learn from successful entrepreneurs and experts',
      count: 25,
      badge: 'Updated',
      resources: [
        { name: 'Pitch Deck Masterclass', type: 'Video', popular: true },
        { name: 'Building MVP in 30 Days', type: 'Series', popular: true },
        { name: 'Scaling Your Startup', type: 'Webinar', popular: false },
        { name: 'Founder Interviews', type: 'Podcast', popular: true }
      ]
    },
    {
      id: 'community-events',
      title: 'Community Events',
      icon: Users,
      color: 'accent',
      description: 'Connect with fellow entrepreneurs and mentors',
      count: 6,
      badge: 'Live',
      resources: [
        { name: 'Monthly Founder Meetup', type: 'Event', popular: true },
        { name: 'Pitch Practice Sessions', type: 'Workshop', popular: true },
        { name: 'Investor Speed Dating', type: 'Networking', popular: false },
        { name: 'Tech Talk Thursdays', type: 'Seminar', popular: false }
      ]
    }
  ];

  const featuredResources = [
    {
      title: 'The Complete Startup Playbook',
      description: 'Everything you need to know about building a startup from idea to exit.',
      type: 'E-book',
      downloads: '2.3k',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop'
    },
    {
      title: 'Fundraising Masterclass',
      description: '6-hour video course on raising your first round of funding.',
      type: 'Video Course',
      downloads: '1.8k',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop'
    },
    {
      title: 'Legal Starter Pack',
      description: 'All essential legal documents for Indian startups.',
      type: 'Template Pack',
      downloads: '3.1k',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8">
            Resource <span className="text-primary">Library</span>
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            Everything you need to build, grow, and scale your startup. 
            Curated by rebels, for rebels.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Featured <span className="text-accent">Resources</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {featuredResources.map((resource, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="glass-subtle rounded-full px-3 py-1 text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{resource.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary">
                    Access Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories - Apple iOS Folder Style */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Browse by <span className="text-primary">Category</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(category.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* iOS Folder-style Card */}
                  <div className="glass rounded-3xl p-6 aspect-square flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-105">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                    
                    {/* Count & Badge */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-sm text-muted-foreground">{category.count} items</span>
                      <span className={`glass-subtle rounded-full px-2 py-1 text-xs text-${category.color} font-medium`}>
                        {category.badge}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Stack Animation */}
                  {hoveredCard === category.id && (
                    <div className="absolute top-2 left-2 right-2 glass rounded-3xl p-6 -z-10 animate-fade-in opacity-30"></div>
                  )}
                  {hoveredCard === category.id && (
                    <div className="absolute top-1 left-1 right-1 glass rounded-3xl p-6 -z-20 animate-fade-in opacity-20"></div>
                  )}

                  {/* Expanded Content on Hover */}
                  {hoveredCard === category.id && (
                    <div className="absolute top-full left-0 right-0 z-20 mt-4 glass rounded-2xl p-6 shadow-2xl animate-scale-in">
                      <h4 className="font-bold mb-3">Quick Access</h4>
                      <div className="space-y-2">
                        {category.resources.map((resource, idx) => (
                          <div key={idx} className="flex items-center justify-between glass-subtle rounded-lg p-3 hover:bg-hover transition-colors">
                            <div className="flex items-center space-x-3">
                              <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                              <span className="text-sm font-medium">{resource.name}</span>
                              {resource.popular && (
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">{resource.type}</span>
                              <ExternalLink className="w-3 h-3 text-muted-foreground" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="w-full btn-primary mt-4">
                        View All in {category.title}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Upcoming <span className="text-accent">Events</span>
          </h2>
          
          <div className="space-y-6">
            {[
              {
                date: 'Mar 15',
                title: 'Pitch Practice Session',
                time: '6:00 PM IST',
                type: 'Workshop',
                spots: '12 spots left'
              },
              {
                date: 'Mar 22',
                title: 'Founder Fireside Chat',
                time: '7:00 PM IST',
                type: 'Networking',
                spots: '25 spots left'
              },
              {
                date: 'Mar 29',
                title: 'Legal Clinic for Startups',
                time: '3:00 PM IST',
                type: 'Seminar',
                spots: '8 spots left'
              }
            ].map((event, index) => (
              <div key={index} className="glass rounded-xl p-6 flex items-center justify-between hover-lift">
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{event.date}</div>
                    <div className="text-xs text-muted-foreground">2024</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </span>
                      <span className="glass-subtle rounded-full px-2 py-1 text-xs">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn-primary mb-2">Register</button>
                  <div className="text-xs text-muted-foreground">{event.spots}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We're constantly adding new resources. Request specific content or 
            contribute your own knowledge to help fellow entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-primary">
              Request Resource
            </button>
            <button className="btn-ghost">
              Contribute Content
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;