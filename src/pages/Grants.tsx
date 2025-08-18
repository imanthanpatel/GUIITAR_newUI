import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, DollarSign, Users, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const Grants = () => {
  const [selectedGrant, setSelectedGrant] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleApplyNow = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent grant expansion
    navigate('/signin');
  };

  const grants = [
    {
      id: 'seed-accelerator',
      name: 'Seed Accelerator Grant',
      tagline: 'For visionaries with MVP dreams',
      amount: '₹5-15 Lakhs',
      deadline: 'Rolling Applications',
      eligibility: ['Pre-seed startups', 'Working MVP', 'India-based founders'],
      description: 'Perfect for early-stage founders ready to validate and scale their minimum viable product.',
      applicationProcess: [
        'Submit initial application',
        'Technical review (48 hours)',
        'Founder interview',
        'Investment committee decision'
      ],
      benefits: [
        'Seed funding',
        '6-month mentorship',
        'Office space access',
        'Legal support',
        'Network access'
      ]
    },
    {
      id: 'tech-innovation',
      name: 'Deep Tech Innovation Fund',
      tagline: 'For technology that bends reality',
      amount: '₹25-50 Lakhs',
      deadline: 'March 15, 2024',
      eligibility: ['Deep tech startups', 'Patent-pending technology', 'Technical co-founder'],
      description: 'For breakthrough technologies in AI, blockchain, robotics, and emerging tech.',
      applicationProcess: [
        'Technical whitepaper submission',
        'Prototype demonstration',
        'Expert panel review',
        'Final presentation'
      ],
      benefits: [
        'Substantial funding',
        'Technical mentorship',
        'R&D facilities access',
        'IP protection support',
        'Industry partnerships'
      ]
    },
    {
      id: 'social-impact',
      name: 'Social Impact Accelerator',
      tagline: 'For change-makers with purpose',
      amount: '₹10-30 Lakhs',
      deadline: 'June 30, 2024',
      eligibility: ['Social enterprises', 'Measurable impact metrics', 'Sustainable business model'],
      description: 'Supporting ventures that create positive social or environmental impact while maintaining profitability.',
      applicationProcess: [
        'Impact assessment',
        'Business model review',
        'Community validation',
        'Impact investor pitch'
      ],
      benefits: [
        'Impact funding',
        'CSR partnerships',
        'Sustainability mentoring',
        'Media coverage',
        'Award opportunities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8">
            Grant <span className="text-primary">Programs</span>
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            We don't just write checks—we write your success story. Choose the grant 
            that matches your ambition level.
          </p>
        </div>
      </section>

      {/* Grants Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {grants.map((grant, index) => (
              <div key={grant.id} className="relative group">
                <div 
                  className={`glass rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-500 ${
                    selectedGrant === grant.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedGrant(selectedGrant === grant.id ? null : grant.id)}
                >
                  {/* Grant Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{grant.name}</h3>
                    <p className="text-muted-foreground italic">{grant.tagline}</p>
                  </div>

                  {/* Floating Metadata Blocks */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between glass-subtle rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Amount</span>
                      </div>
                      <span className="font-bold text-primary">{grant.amount}</span>
                    </div>

                    <div className="flex items-center justify-between glass-subtle rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Deadline</span>
                      </div>
                      <span className="font-medium">{grant.deadline}</span>
                    </div>

                    <div className="glass-subtle rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="text-sm font-medium">Eligibility</span>
                      </div>
                      <div className="space-y-2">
                        {grant.eligibility.map((criterion, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm text-muted-foreground">{criterion}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {grant.description}
                  </p>

                  {/* Apply Now Button with Glow */}
                  <button 
                    className="w-full btn-primary group relative overflow-hidden"
                    onClick={handleApplyNow}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Hover Ring Animation */}
                    <div className="absolute inset-0 rounded-xl border-2 border-primary/50 scale-100 group-hover:scale-105 group-hover:border-primary transition-all duration-300"></div>
                  </button>
                </div>

                {/* Expanded Details */}
                {selectedGrant === grant.id && (
                  <div className="absolute top-full left-0 right-0 z-20 mt-4 glass rounded-2xl p-8 shadow-2xl animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Application Process */}
                      <div>
                        <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
                          <Clock className="w-5 h-5 text-primary" />
                          <span>Application Process</span>
                        </h4>
                        <div className="space-y-3">
                          {grant.applicationProcess.map((step, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold mt-0.5">
                                {idx + 1}
                              </div>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-accent" />
                          <span>What You Get</span>
                        </h4>
                        <div className="space-y-2">
                          {grant.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-accent"></div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/30">
                      <button 
                        onClick={() => setSelectedGrant(null)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Click to collapse details
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funded Student Projects */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero mb-6">
              Funded <span className="text-primary">Student Projects</span>
            </h2>
            <p className="text-subtitle">
              Success stories from our student entrepreneurs who transformed ideas into thriving startups
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "EcoTech Solutions",
                student: "Arjun Sharma",
                photo: "/api/placeholder/300/300",
                description: "Revolutionary biodegradable packaging made from agricultural waste. Secured contracts with 50+ restaurants.",
                funding: "₹12 Lakhs",
                status: "Active",
                revenue: "₹2.5 Cr"
              },
              {
                id: 2,
                name: "MedAssist AI",
                student: "Priya Patel",
                photo: "/api/placeholder/300/300",
                description: "AI-powered diagnostic tool for early disease detection. Currently used in 25+ clinics.",
                funding: "₹18 Lakhs",
                status: "Series A",
                revenue: "₹4.2 Cr"
              },
              {
                id: 3,
                name: "EduVerse",
                student: "Rohit Kumar",
                photo: "/api/placeholder/300/300",
                description: "Virtual reality platform for immersive learning experiences. 10,000+ active students.",
                funding: "₹15 Lakhs",
                status: "Growing",
                revenue: "₹1.8 Cr"
              },
              {
                id: 4,
                name: "AgriBot",
                student: "Sneha Reddy",
                photo: "/api/placeholder/300/300",
                description: "Autonomous farming robots for precision agriculture. Deployed across 200+ farms.",
                funding: "₹22 Lakhs",
                status: "Scaling",
                revenue: "₹3.1 Cr"
              },
              {
                id: 5,
                name: "FinSecure",
                student: "Vikash Singh",
                photo: "/api/placeholder/300/300",
                description: "Blockchain-based secure payment gateway for small businesses. 500+ merchants onboarded.",
                funding: "₹20 Lakhs",
                status: "Profitable",
                revenue: "₹2.8 Cr"
              },
              {
                id: 6,
                name: "CleanWater Tech",
                student: "Ananya Joshi",
                photo: "/api/placeholder/300/300",
                description: "IoT-enabled water purification systems for rural areas. Installed in 100+ villages.",
                funding: "₹16 Lakhs",
                status: "Impact Stage",
                revenue: "₹1.9 Cr"
              }
            ].map((project, index) => (
              <div
                key={project.id}
                className={`glass rounded-3xl overflow-hidden hover-lift smooth-transition transform transition-all duration-700 ${
                  'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Student Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.photo}
                    alt={project.student}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h4 className="text-lg font-bold text-white">{project.student}</h4>
                    <p className="text-white/80 text-sm">{project.name}</p>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Funding Received</span>
                      <span className="font-bold text-primary">{project.funding}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Current Revenue</span>
                      <span className="font-bold text-accent">{project.revenue}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary px-8 py-3">
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Supported Startups */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero mb-6">
              Supported <span className="text-primary">Startups</span>
            </h2>
            <p className="text-subtitle">
              Established companies that have grown beyond our incubation program and continue to thrive
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                name: "TechFlow",
                description: "Enterprise automation platform serving Fortune 500 companies with AI-driven workflow optimization.",
                funding: "Series B",
                employees: "150+",
                valuation: "₹500 Cr",
                sector: "Enterprise Software"
              },
              {
                id: 2,
                name: "GreenEnergy Co",
                description: "Renewable energy solutions with solar installations across 15 states and 2 GW capacity.",
                funding: "Series C", 
                employees: "300+",
                valuation: "₹1200 Cr",
                sector: "Clean Energy"
              },
              {
                id: 3,
                name: "HealthTech Plus",
                description: "Telemedicine platform connecting patients with specialists, serving 1M+ users monthly.",
                funding: "Series A",
                employees: "80+", 
                valuation: "₹200 Cr",
                sector: "Healthcare"
              },
              {
                id: 4,
                name: "EduNext",
                description: "Personalized learning platform used by 500+ schools with adaptive AI curriculum.",
                funding: "Series B",
                employees: "120+",
                valuation: "₹350 Cr", 
                sector: "EdTech"
              },
              {
                id: 5,
                name: "FinBridge",
                description: "Digital banking infrastructure enabling seamless payments for 10,000+ merchants.",
                funding: "Series A",
                employees: "90+",
                valuation: "₹280 Cr",
                sector: "FinTech"
              },
              {
                id: 6,
                name: "AgriSmart",
                description: "Precision agriculture platform optimizing crop yields for 50,000+ farmers.",
                funding: "Series B",
                employees: "110+", 
                valuation: "₹320 Cr",
                sector: "AgriTech"
              },
              {
                id: 7,
                name: "LogiChain",
                description: "Supply chain management platform reducing delivery times by 40% for e-commerce.",
                funding: "Series A",
                employees: "70+",
                valuation: "₹180 Cr",
                sector: "Logistics"
              },
              {
                id: 8,
                name: "CyberGuard",
                description: "Cybersecurity solutions protecting 1000+ organizations from advanced threats.",
                funding: "Series B",
                employees: "160+",
                valuation: "₹420 Cr",
                sector: "Cybersecurity"
              }
            ].map((startup, index) => (
              <div
                key={startup.id}
                className={`glass rounded-2xl p-6 hover-lift smooth-transition transform transition-all duration-700 ${
                  'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{startup.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
                    {startup.sector}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {startup.description}
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Funding Stage</span>
                    <span className="text-sm font-medium text-primary">{startup.funding}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Team Size</span>
                    <span className="text-sm font-medium">{startup.employees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Valuation</span>
                    <span className="text-sm font-medium text-accent">{startup.valuation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore All Startups Button */}
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3">
              Explore All Startups
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Funded?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Don't see a perfect match? We're always open to exceptional ideas that 
            don't fit conventional categories.
          </p>
          <button className="btn-accent text-lg px-12 py-4">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grants;