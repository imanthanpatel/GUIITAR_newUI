import { ArrowUp, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Mission', href: '#mission' },
      { label: 'Leadership', href: '#team' },
      { label: 'Careers', href: '#careers' }
    ],
    Programs: [
      { label: 'Grants', href: '#grants' },
      { label: 'Mentorship', href: '#mentorship' },
      { label: 'Labs Access', href: '#labs' },
      { label: 'Events', href: '#events' }
    ],
    Resources: [
      { label: 'Documentation', href: '#docs' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Blog', href: '#blog' },
      { label: 'Press Kit', href: '#press' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookies Policy', href: '/cookies-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Code of Conduct', href: '#conduct' },
      { label: 'Guidelines', href: '#guidelines' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative border-t border-border/30 mt-24">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="text-3xl font-bold font-space tracking-tight mb-4">
                <span className="text-foreground">GUIITAR</span>
                <span className="text-primary ml-1">Council</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                Where ambitious ideas meet fearless execution. We don't just support startups—we birth unicorns.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 glass-subtle rounded-xl flex items-center justify-center hover:scale-110 smooth-transition group"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-foreground font-semibold mb-6 text-lg">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground smooth-transition text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <span>© 2025 GUIITAR Council. All Rights Reserved.</span>
              <span>•</span>
              <a href="/sitemap" className="hover:text-foreground smooth-transition">
                Sitemap
              </a>
            </div>

            {/* Created by */}
            <div className="flex items-center text-muted-foreground">
              <span className="text-sm font-medium">Created by Vedant Mistry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Element */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-12 h-12 glass rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;