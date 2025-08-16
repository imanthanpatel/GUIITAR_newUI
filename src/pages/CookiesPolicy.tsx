import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality',
      examples: [
        'Authentication and session management',
        'Security features and fraud prevention',
        'Load balancing and performance optimization',
        'Language and accessibility preferences'
      ],
      required: true
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: [
        'Page views and user engagement metrics',
        'Traffic sources and referral information',
        'Device and browser usage statistics',
        'Performance monitoring and error tracking'
      ],
      required: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      examples: [
        'User preferences and settings',
        'Personalized content recommendations',
        'Chat support and communication features',
        'Form data and progress saving'
      ],
      required: false
    },
    {
      icon: Globe,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements',
      examples: [
        'Targeted advertising campaigns',
        'Social media integration',
        'Third-party marketing platforms',
        'Conversion tracking and attribution'
      ],
      required: false
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
              <Cookie className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-hero mb-6">
              Cookies <span className="text-accent">Policy</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              We use cookies and similar technologies to improve your experience on our website. 
              Learn about the types of cookies we use and how to manage your preferences.
            </p>
            <div className="mt-6 text-sm text-muted-foreground">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">What Are Cookies?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Cookies are small text files that are stored on your device when you visit a website. 
                They help websites remember information about your visit, such as your preferred language 
                and other settings.
              </p>
              <p>
                We use cookies to make our website work properly, analyze how it's used, and provide 
                you with a personalized experience. Some cookies are essential for the website to function, 
                while others are optional and can be disabled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Types of <span className="text-primary">Cookies</span> We Use
          </h2>
          
          <div className="space-y-8">
            {cookieTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="glass rounded-3xl p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{type.title}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      type.required 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {type.required ? 'Required' : 'Optional'}
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <h4 className="font-semibold text-foreground mb-3">Examples include:</h4>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cookie Management */}
          <div className="mt-16">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Managing Your Cookie Preferences</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  You can control and manage cookies in several ways. Most web browsers automatically 
                  accept cookies, but you can modify your browser settings to decline cookies if you prefer.
                </p>
                <p>
                  Please note that disabling certain cookies may impact the functionality of our website. 
                  Essential cookies cannot be disabled as they are necessary for the website to work properly.
                </p>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Contact Us About Cookies
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="btn-ghost inline-flex items-center justify-center"
                >
                  View Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiesPolicy;