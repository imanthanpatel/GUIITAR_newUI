import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const siteStructure = {
    'Main Pages': [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'About GUIITAR Council' },
      { name: 'Grants', path: '/grants', description: 'Available funding opportunities' },
      { name: 'Labs', path: '/labs', description: 'Research facilities and equipment' },
      { name: 'Resources', path: '/resources', description: 'Documentation and guides' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
      { name: 'Careers', path: '/careers', description: 'Join our team' },
    ],
    'Authentication': [
      { name: 'Sign In', path: '/signin', description: 'Access your account' },
      { name: 'Dashboard', path: '/dashboard', description: 'User dashboard (requires login)' },
    ],
    'Legal & Policies': [
      { name: 'Privacy Policy', path: '#privacy', description: 'How we handle your data' },
      { name: 'Cookies Policy', path: '#cookies', description: 'Cookie usage information' },
      { name: 'Terms of Service', path: '#terms', description: 'Terms and conditions' },
      { name: 'Code of Conduct', path: '#conduct', description: 'Community guidelines' },
    ],
    'External Links': [
      { name: 'GSFC University', path: '#', description: 'Our parent institution', external: true },
      { name: 'GitHub', path: '#', description: 'Open source projects', external: true },
      { name: 'LinkedIn', path: '#', description: 'Professional network', external: true },
      { name: 'Twitter', path: '#', description: 'Latest updates', external: true },
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary smooth-transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="text-hero mb-6">
              Site <span className="text-primary">Map</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              Complete overview of all pages and resources available on the GUIITAR Council website. 
              Navigate easily to any section or find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(siteStructure).map(([category, pages], categoryIndex) => (
              <div
                key={category}
                className={`transform transition-all duration-700 ${
                  'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="glass rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6 font-space">
                    {category}
                  </h2>
                  
                  <div className="space-y-4">
                    {pages.map((page, index) => (
                      <div
                        key={page.name}
                        className="group flex items-start justify-between p-4 rounded-2xl hover:bg-muted/30 smooth-transition"
                      >
                        <div className="flex-1">
                          {page.external ? (
                            <a
                              href={page.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-foreground hover:text-primary smooth-transition"
                            >
                              <span className="font-medium">{page.name}</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <Link
                              to={page.path}
                              className="text-foreground hover:text-primary smooth-transition font-medium"
                            >
                              {page.name}
                            </Link>
                          )}
                          <p className="text-muted-foreground text-sm mt-1">
                            {page.description}
                          </p>
                        </div>
                        
                        <div className="ml-4 text-xs text-muted-foreground font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                          {page.path}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Need Help?
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Can't find what you're looking for? Visit our{' '}
                <Link to="/contact" className="text-primary hover:text-accent smooth-transition">
                  contact page
                </Link>{' '}
                to get in touch with our team, or check out our{' '}
                <a href="#faq" className="text-primary hover:text-accent smooth-transition">
                  frequently asked questions
                </a>{' '}
                for quick answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sitemap;