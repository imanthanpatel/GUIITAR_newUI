import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when registering for our programs',
        'Usage data and analytics from your interactions with our platform',
        'Communication preferences and contact information',
        'Professional background and startup-related information'
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our incubation services',
        'To communicate about programs, grants, and opportunities',
        'To analyze and enhance user experience on our platform',
        'To ensure security and prevent fraudulent activities'
      ]
    },
    {
      icon: Share2,
      title: 'Information Sharing',
      content: [
        'We do not sell or rent your personal information to third parties',
        'Information may be shared with program partners for specific opportunities',
        'Data may be disclosed if required by law or to protect our rights',
        'Anonymized data may be used for research and improvement purposes'
      ]
    },
    {
      icon: Database,
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures',
        'All sensitive data is encrypted both in transit and at rest',
        'Regular security audits and updates are performed',
        'Access to personal information is strictly limited to authorized personnel'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Right to access, update, or delete your personal information',
        'Right to opt-out of marketing communications',
        'Right to request data portability',
        'Right to lodge a complaint with supervisory authorities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-hero mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              Your privacy matters to us. This policy explains how we collect, use, and protect 
              your personal information when you use GUIITAR Council services.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="glass rounded-3xl p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Questions About This Policy?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact us.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;