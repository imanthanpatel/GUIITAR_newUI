import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, DollarSign, Users, ArrowRight, CheckCircle, Clock, Award, Target, BookOpen } from 'lucide-react';

const NodalGrant = () => {
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
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Nodal Grant Program</span>
          </div>
          <h1 className="text-hero mb-8">
            <span className="text-primary">Nodal Grant</span> - ₹30 Lakhs
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            Fuel your startup's first spark into a blazing innovation. The Nodal Grant is designed for visionary entrepreneurs ready to transform groundbreaking ideas into market-ready solutions.
          </p>
        </div>
      </section>

      {/* Grant Overview */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-2xl p-8 text-center">
              <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">₹30 Lakhs</h3>
              <p className="text-muted-foreground">Maximum Funding</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">847</h3>
              <p className="text-muted-foreground">Total Applicants</p>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">12%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Program Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Program Details</h2>
              <div className="space-y-6">
                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Timeline</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Rolling applications with quarterly review cycles. Application to approval takes 8-12 weeks.
                  </p>
                </div>

                <div className="glass-subtle rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                    <Target className="w-5 h-5 text-accent" />
                    <span>Focus Areas</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Technology Innovation',
                      'Sustainable Solutions',
                      'Healthcare & Biotech',
                      'AI & Machine Learning',
                      'Clean Energy'
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
                    <span>Basic Requirements</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Indian startup registered within last 3 years',
                      'Innovative technology or business model',
                      'Scalable solution with market potential',
                      'Team with relevant domain expertise',
                      'Clear go-to-market strategy'
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
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span>Documentation</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Business plan (10-15 pages)',
                      'Financial projections (3 years)',
                      'Product demo or prototype',
                      'Team profiles and resumes',
                      'Market research report'
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
              Application <span className="text-primary">Process</span>
            </h2>
            <p className="text-subtitle">
              A streamlined 4-step process designed to identify and support the most promising innovations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Initial Application',
                description: 'Submit your business plan, financial projections, and team details through our online portal.',
                timeline: '2 weeks'
              },
              {
                step: 2,
                title: 'Technical Review',
                description: 'Expert panel evaluates your technology, innovation potential, and market viability.',
                timeline: '3-4 weeks'
              },
              {
                step: 3,
                title: 'Pitch Presentation',
                description: 'Present your startup to our investment committee and answer technical questions.',
                timeline: '1 week'
              },
              {
                step: 4,
                title: 'Final Decision',
                description: 'Receive funding decision and begin onboarding process with mentor assignment.',
                timeline: '2-3 weeks'
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
              What You <span className="text-accent">Get</span>
            </h2>
            <p className="text-subtitle">
              Beyond funding, we provide comprehensive support to accelerate your startup's growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '₹30 Lakhs Funding',
                description: 'Direct financial support to fuel your innovation and scale operations.',
                color: 'bg-primary'
              },
              {
                title: '12-Month Mentorship',
                description: 'Dedicated industry experts guide your strategic decisions and growth.',
                color: 'bg-accent'
              },
              {
                title: 'Lab & Office Access',
                description: 'State-of-the-art facilities and co-working spaces for your team.',
                color: 'bg-primary'
              },
              {
                title: 'Legal & IP Support',
                description: 'Professional legal assistance for patents, compliance, and protection.',
                color: 'bg-accent'
              },
              {
                title: 'Network Access',
                description: 'Connect with investors, industry leaders, and fellow entrepreneurs.',
                color: 'bg-primary'
              },
              {
                title: 'Market Validation',
                description: 'Research support and pilot program opportunities with enterprise clients.',
                color: 'bg-accent'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 hover-lift">
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Vision?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Join the ranks of successful entrepreneurs who have turned their innovative ideas into thriving businesses with our Nodal Grant support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleApplyNow}
              className="btn-primary text-lg px-12 py-4 group"
            >
              <span>Apply for Nodal Grant</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NodalGrant;