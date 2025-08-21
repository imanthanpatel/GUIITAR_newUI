import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';  
import { Calendar, DollarSign, Users, ArrowRight, CheckCircle, Clock, Rocket, Beaker, GraduationCap } from 'lucide-react';

const SSIPGrant = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-primary/10 rounded-full px-6 py-3 mb-8">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">SSIP Grant Program</span>
          </div>
          <h1 className="text-hero mb-8">
            <span className="text-primary">SSIP Grant</span> - ₹2.5 Lakhs
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            Revolutionary breakthroughs that reshape entire industries. The Student Startup Innovation Policy (SSIP) Grant empowers student entrepreneurs to transform academic research into market-ready innovations.
          </p>
        </div>
      </section>

      {/* Grant Overview */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-2xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">₹2.5 Lakhs</h3>
              <p className="text-muted-foreground">Maximum Funding</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">123</h3>
              <p className="text-muted-foreground">Total Applicants</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">3%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Program Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Program Overview</h2>
              <div className="space-y-6">
                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span>Student Focus</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Specifically designed for students and recent graduates with innovative ideas that can create significant industry impact.
                  </p>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Beaker className="w-5 h-5 text-accent" />
                    <span>Research Areas</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Deep Technology Research',
                      'Industry 4.0 Solutions',
                      'Sustainable Development',
                      'Social Innovation',
                      'Emerging Technologies'
                    ].map((area, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Eligibility & Requirements */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Eligibility Criteria</h2>
              <div className="space-y-6">
                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Student Requirements</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Current student or graduated within 2 years',
                      'Original research or innovation project',
                      'Faculty mentor or advisor support',
                      'Demonstrated technical competency',
                      'Clear industry application potential'
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-accent" />
                    <span>Project Requirements</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Research proposal (5-8 pages)',
                      'Prototype or proof of concept',
                      'Faculty recommendation letter',
                      'Technical feasibility study',
                      'Industry impact assessment'
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1" />
                        <span className="text-muted-foreground">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero mb-6">
              Application <span className="text-primary">Journey</span>
            </h2>
            <p className="text-subtitle">
              Streamlined process to identify and nurture breakthrough student innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Research Submission',
                description: 'Submit your research proposal, prototype, and faculty endorsement through the portal.',
                timeline: '2 weeks'
              },
              {
                step: 2,
                title: 'Academic Review',
                description: 'Expert faculty panel evaluates technical merit, innovation potential, and feasibility.',
                timeline: '3 weeks'
              },
              {
                step: 3,
                title: 'Innovation Pitch',
                description: 'Present your breakthrough research to our SSIP evaluation committee.',
                timeline: '1 week'
              },
              {
                step: 4,
                title: 'Grant Activation',
                description: 'Receive funding and join our student entrepreneur acceleration program.',
                timeline: '1 week'
              }
            ].map((process) => (
              <div key={process.step} className="glass rounded-2xl p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{process.description}</p>
                <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-3 py-1">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">{process.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero mb-6">
              Student <span className="text-accent">Benefits</span>
            </h2>
            <p className="text-subtitle">
              Comprehensive support for student entrepreneurs and researchers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '₹2.5 Lakhs Research Fund',
                description: 'Direct funding for research expenses, prototype development, and project execution.',
                color: 'bg-primary'
              },
              {
                title: 'Faculty Mentorship',
                description: 'Dedicated academic mentor guidance throughout your innovation journey.',
                color: 'bg-accent'
              },
              {
                title: 'Research Lab Access',
                description: 'Access to advanced research facilities and specialized equipment.',
                color: 'bg-primary'
              },
              {
                title: 'Industry Connect',
                description: 'Direct connections with industry experts and potential employers.',
                color: 'bg-accent'
              },
              {
                title: 'Publication Support',
                description: 'Assistance with research papers, patents, and conference presentations.',
                color: 'bg-primary'
              },
              {
                title: 'Entrepreneurship Training',
                description: 'Business development workshops and startup acceleration programs.',
                color: 'bg-accent'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 hover-lift">
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero mb-6">
              Student <span className="text-primary">Innovators</span>
            </h2>
            <p className="text-subtitle">
              Breakthrough innovations from our SSIP Grant recipients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                student: 'Priya Sharma',
                institution: 'IIT Delhi',
                innovation: 'Smart Water Quality Sensor',
                impact: 'IoT-based water quality monitoring system deployed in 50+ villages',
                grant: '₹2.5 Lakhs',
                status: 'Patent Filed'
              },
              {
                student: 'Arjun Patel',
                institution: 'NIT Surat',
                innovation: 'AI-Powered Crop Disease Detection',
                impact: 'Mobile app helping 10,000+ farmers detect plant diseases early',
                grant: '₹2.3 Lakhs',
                status: 'Commercialized'
              },
              {
                student: 'Sneha Reddy',
                institution: 'IISC Bangalore',
                innovation: 'Biodegradable Plastic Alternative',
                impact: 'Novel material reducing plastic waste by 80% in packaging',
                grant: '₹2.5 Lakhs',
                status: 'Industry Partner'
              }
            ].map((story, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 hover-lift">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">{story.student}</h3>
                  <p className="text-accent text-sm">{story.institution}</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <p className="text-primary font-semibold text-center">{story.innovation}</p>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{story.impact}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Grant: {story.grant}</span>
                  <span className="px-2 py-1 bg-accent/20 text-accent rounded-full font-medium">
                    {story.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make Your Mark?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Transform your research into industry-changing innovation with our SSIP Grant program designed specifically for student entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleApplyNow}
              className="btn-primary text-lg px-12 py-4 group"
            >
              <span>Apply for SSIP Grant</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Get Research Guidance
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SSIPGrant;