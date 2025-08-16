import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, Scale, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using GUIITAR Council services, you agree to be bound by these Terms',
        'These terms apply to all users, including startups, mentors, and partners',
        'We reserve the right to modify these terms at any time with prior notice',
        'Continued use of our services constitutes acceptance of any changes'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Services Description',
      content: [
        'Incubation and acceleration programs for startups',
        'Mentorship and advisory services from industry experts',
        'Access to funding opportunities and investor networks',
        'Workspace facilities and technical resources'
      ]
    },
    {
      icon: Scale,
      title: 'User Responsibilities',
      content: [
        'Provide accurate and truthful information in all applications',
        'Comply with all applicable laws and regulations',
        'Respect intellectual property rights of others',
        'Maintain confidentiality of sensitive information shared during programs'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Prohibited Activities',
      content: [
        'Engaging in fraudulent or deceptive practices',
        'Violating any intellectual property rights',
        'Harassing or discriminating against other users',
        'Using our services for illegal or unauthorized purposes'
      ]
    },
    {
      icon: FileText,
      title: 'Intellectual Property',
      content: [
        'You retain ownership of your intellectual property and business ideas',
        'GUIITAR Council may use anonymized data for research and improvement',
        'Our content, trademarks, and proprietary information remain our property',
        'Respect for intellectual property is fundamental to our community'
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Scale className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-hero mb-6">
              Terms of <span className="text-accent">Service</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              These terms govern your use of GUIITAR Council services. Please read them carefully 
              to understand your rights and obligations when using our platform.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
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

          {/* Additional Terms */}
          <div className="mt-16 space-y-8">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                GUIITAR Council provides services "as is" without warranties. We are not liable for 
                any indirect, incidental, or consequential damages arising from your use of our services. 
                Our total liability is limited to the amount you paid for our services.
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Termination</h3>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate these terms at any time. Upon termination, your access to 
                our services will cease, but the terms regarding confidentiality, intellectual property, 
                and limitation of liability will survive.
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of India. Any disputes will be resolved through 
                binding arbitration in accordance with Indian Arbitration and Conciliation Act.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Questions About These Terms?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about these Terms of Service, please contact our legal team. 
                We're here to help clarify any concerns you may have.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Contact Legal Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;