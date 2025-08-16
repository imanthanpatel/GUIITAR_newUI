import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Code, Lightbulb } from 'lucide-react';

const Careers = () => {
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  const jobs = [
    {
      id: 'startup-catalyst',
      title: 'Startup Catalyst',
      department: 'Incubation',
      location: 'Vadodara, Gujarat',
      type: 'Full-time',
      salary: '₹15-25 LPA',
      description: 'Guide early-stage startups from idea to product-market fit.',
      responsibilities: [
        'Mentor 8-12 startups simultaneously',
        'Design and facilitate founder workshops',
        'Connect startups with industry experts',
        'Track and improve startup success metrics'
      ],
      requirements: [
        '3+ years in startup ecosystem',
        'Previous founder experience preferred',
        'Strong network in tech/business',
        'Exceptional communication skills'
      ],
      perks: ['Equity participation', 'Flexible work hours', 'Learning stipend', 'Conference travel'],
      gif: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif'
    },
    {
      id: 'investment-analyst',
      title: 'Investment Analyst',
      department: 'Funding',
      location: 'Vadodara, Gujarat',
      type: 'Full-time',
      salary: '₹12-18 LPA',
      description: 'Evaluate investment opportunities and support portfolio companies.',
      responsibilities: [
        'Conduct due diligence on startups',
        'Create investment memos and presentations',
        'Monitor portfolio company performance',
        'Support fundraising for portfolio companies'
      ],
      requirements: [
        'MBA or CFA preferred',
        '2+ years in investment banking/VC',
        'Strong financial modeling skills',
        'Understanding of tech business models'
      ],
      perks: ['Performance bonuses', 'Health insurance', 'Stock options', 'Professional development'],
      gif: 'https://media.giphy.com/media/3o7TKTDn976rzVgky4/giphy.gif'
    },
    {
      id: 'technical-lead',
      title: 'Technical Lead',
      department: 'Innovation',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      salary: '₹25-35 LPA',
      description: 'Lead technical evaluations and support deep-tech startups.',
      responsibilities: [
        'Review technical architectures',
        'Provide CTO-level guidance to startups',
        'Evaluate emerging technologies',
        'Build technical assessment frameworks'
      ],
      requirements: [
        '7+ years in senior tech roles',
        'Experience with multiple tech stacks',
        'Previous startup CTO experience',
        'Strong mentoring abilities'
      ],
      perks: ['Remote work', 'Latest tech equipment', 'Innovation time', 'Conference speaking'],
      gif: 'https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif'
    },
    {
      id: 'community-manager',
      title: 'Community Manager',
      department: 'Ecosystem',
      location: 'Vadodara, Gujarat',
      type: 'Full-time',
      salary: '₹8-12 LPA',
      description: 'Build and nurture our entrepreneur community.',
      responsibilities: [
        'Organize startup events and meetups',
        'Manage online community platforms',
        'Create content for social media',
        'Facilitate founder networking'
      ],
      requirements: [
        '2+ years in community management',
        'Experience with event planning',
        'Strong social media presence',
        'Passion for entrepreneurship'
      ],
      perks: ['Event budget', 'Social media tools', 'Networking opportunities', 'Creative freedom'],
      gif: 'https://media.giphy.com/media/l0HlQ7LRalQqdWfao/giphy.gif'
    }
  ];

  const labImages = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8">
            Work with <span className="text-primary">rebels</span>.
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            We're not your typical corporate environment. We're a collective of 
            misfits building the future of Indian entrepreneurship.
          </p>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Open <span className="text-accent">Positions</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="relative group"
                onMouseEnter={() => setHoveredJob(job.id)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                {/* Job Card */}
                <div className="glass rounded-2xl p-8 hover-lift transition-all duration-500 h-full">
                  {/* Job Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="text-primary font-medium">{job.department}</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground mb-1">{job.type}</div>
                        <div className="font-bold text-accent">{job.salary}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>

                  {/* Quick Info */}
                  <div className="flex items-center justify-between glass-subtle rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-sm">{job.department}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Apply Button */}
                  <button className="w-full btn-primary">
                    Apply Now
                  </button>
                </div>

                {/* Deeper Job Card on Hover */}
                {hoveredJob === job.id && (
                  <div className="absolute top-0 left-0 right-0 z-20 glass rounded-2xl p-8 shadow-2xl animate-scale-in">
                    <div className="grid grid-cols-1 gap-6">
                      {/* Header with GIF */}
                      <div className="flex items-start space-x-6">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                          <p className="text-muted-foreground">{job.description}</p>
                        </div>
                        <div className="w-24 h-16 rounded-lg overflow-hidden">
                          <img 
                            src={job.gif} 
                            alt="Job vibe" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Responsibilities */}
                        <div>
                          <h4 className="font-bold mb-3 flex items-center space-x-2">
                            <Code className="w-4 h-4 text-primary" />
                            <span>You'll do</span>
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.slice(0, 3).map((resp, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h4 className="font-bold mb-3 flex items-center space-x-2">
                            <Lightbulb className="w-4 h-4 text-accent" />
                            <span>You'll need</span>
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Perks */}
                      <div>
                        <h4 className="font-bold mb-3">Perks & Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.perks.map((perk, idx) => (
                            <span key={idx} className="glass-subtle rounded-full px-3 py-1 text-sm">
                              {perk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="btn-primary">
                        Apply for this position →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Energy Section */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Feel the <span className="text-primary">Energy</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {labImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl hover-lift">
                <img 
                  src={image} 
                  alt={`Lab energy ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-foreground font-medium">
                    {index === 0 && "Where ideas come to life"}
                    {index === 1 && "Collaboration in action"}
                    {index === 2 && "Innovation lab vibes"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Don't see your dream role?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We're always looking for exceptional talent who share our rebel spirit. 
            Send us your story.
          </p>
          <button className="btn-accent text-lg px-12 py-4">
            Pitch Yourself
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;