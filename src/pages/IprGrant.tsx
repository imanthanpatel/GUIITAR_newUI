import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, DollarSign, Users, ArrowRight, CheckCircle, Clock, Shield, Lightbulb, FileText } from 'lucide-react';

const IprGrant = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyNow = () => {
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-3 bg-accent/10 rounded-full px-6 py-3 mb-8">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">IPR Grant Program</span>
          </div>
          <h1 className="text-hero mb-8">
            <span className="text-accent">IPR Grant</span> - ₹5 Lakhs
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            Scale your proven concept into market dominance. The IPR Grant focuses on protecting and commercializing intellectual property for innovative startups with patent-pending technologies.
          </p>
        </div>
      </section>

      {/* Grant Overview */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-2xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">₹5 Lakhs</h3>
              <p className="text-muted-foreground">Maximum Funding</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">342</h3>
              <p className="text-muted-foreground">Total Applicants</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">8%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Program Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Program Focus</h2>
              <div className="space-y-6">
                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span>IP Protection</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive support for patent filing, trademark registration, and IP strategy development.
                  </p>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5 text-primary" />
                    <span>Innovation Areas</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Software & Algorithms',
                      'Hardware Innovations',
                      'Biotechnology Patents',
                      'Process Innovations',
                      'Design Patents'
                    ].map((area, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent" />
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
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Key Requirements</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Patent application filed or ready to file',
                      'Novel and non-obvious innovation',
                      'Commercial viability demonstrated',
                      'Indian entity with IP ownership',
                      'Technical expertise in relevant domain'
                    ].map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                        <span className="text-muted-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <span>Required Documents</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Patent application or prior art search',
                      'Technical specification document',
                      'IP commercialization plan',
                      'Market analysis and strategy',
                      'Team IP experience portfolio'
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1" />
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
              Application <span className="text-accent">Process</span>
            </h2>
            <p className="text-subtitle">
              Specialized review process for intellectual property innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'IP Documentation',
                description: 'Submit patent applications, technical specifications, and IP strategy documents.',
                timeline: '1-2 weeks'
              },
              {
                step: 2,
                title: 'Technical Assessment',
                description: 'IP experts and patent attorneys evaluate novelty, commercial potential, and protection strategy.',
                timeline: '2-3 weeks'
              },
              {
                step: 3,
                title: 'IP Committee Review',
                description: 'Present your innovation to our specialized IP evaluation committee.',
                timeline: '1 week'
              },
              {
                step: 4,
                title: 'Grant Award',
                description: 'Receive funding and begin IP acceleration program with legal support.',
                timeline: '1-2 weeks'
              }
            ].map((process) => (
              <div key={process.step} className="glass rounded-2xl p-6 text-center hover-lift">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{process.description}</p>
                <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 py-1">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">{process.timeline}</span>
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
              Grant <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-subtitle">
              Comprehensive IP protection and commercialization support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '₹5 Lakhs IP Funding',
                description: 'Direct financial support for patent filing, IP protection, and legal expenses.',
                color: 'bg-accent'
              },
              {
                title: 'Patent Filing Support',
                description: 'Expert guidance through patent application process and prosecution.',
                color: 'bg-primary'
              },
              {
                title: 'IP Strategy Consulting',
                description: 'Professional IP strategy development and portfolio management.',
                color: 'bg-accent'
              },
              {
                title: 'Legal Network Access',
                description: 'Connect with top IP attorneys and patent professionals.',
                color: 'bg-primary'
              },
              {
                title: 'Prior Art Analysis',
                description: 'Comprehensive patent landscape analysis and freedom-to-operate studies.',
                color: 'bg-accent'
              },
              {
                title: 'Commercialization Roadmap',
                description: 'Strategic guidance on licensing, partnerships, and monetization.',
                color: 'bg-primary'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 hover-lift">
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-hero mb-6">
              IPR Success <span className="text-accent">Stories</span>
            </h2>
            <p className="text-subtitle">
              Innovations that transformed industries through strong IP protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: 'MedTech Innovations',
                patent: 'AI-Powered Diagnostic Algorithm',
                impact: 'Patent protected algorithm now licensed to 15+ healthcare providers',
                funding: '₹5 Lakhs',
                status: 'Licensed globally'
              },
              {
                company: 'GreenEnergy Solutions',
                patent: 'Solar Panel Efficiency Enhancement',
                impact: '23% efficiency improvement patent awarded, manufacturing partnerships secured',
                funding: '₹4.8 Lakhs',
                status: 'Commercial production'
              }
            ].map((story, idx) => (
              <div key={idx} className="glass rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-4">{story.company}</h3>
                <div className="bg-accent/10 rounded-lg p-4 mb-4">
                  <p className="text-accent font-semibold">{story.patent}</p>
                </div>
                <p className="text-muted-foreground mb-6">{story.impact}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">IPR Grant: {story.funding}</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
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
          <h2 className="text-3xl font-bold mb-6">Protect Your Innovation Today</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Turn your intellectual property into a competitive advantage with our specialized IPR Grant program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleApplyNow}
              className="btn-accent text-lg px-12 py-4 group"
            >
              <span>Apply for IPR Grant</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Consult IP Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IprGrant;