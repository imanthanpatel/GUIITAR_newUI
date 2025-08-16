import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is GUIITAR Council?",
      answer: "GUIITAR Council is the innovation and incubation arm of GSFC University, dedicated to transforming ambitious ideas into market-ready startups. We provide funding, mentorship, and resources to help entrepreneurs build scalable businesses."
    },
    {
      question: "Who can apply for GUIITAR Council programs?",
      answer: "We welcome applications from students, faculty, alumni, and external entrepreneurs with innovative ideas. Our programs are open to individuals and teams across all sectors and industries who demonstrate passion, commitment, and scalable business potential."
    },
    {
      question: "What kind of funding does GUIITAR Council provide?",
      answer: "We offer various funding options including seed grants ranging from ₹50,000 to ₹10 lakhs, equity investments for high-growth startups, and bridge funding for specific milestones. Our funding is milestone-based and comes with comprehensive mentorship support."
    },
    {
      question: "How long is the incubation program?",
      answer: "Our standard incubation program runs for 12-18 months, with the possibility of extension based on startup progress and needs. We also offer shorter acceleration programs (3-6 months) for more mature startups looking for specific support."
    },
    {
      question: "What resources and facilities does GUIITAR Council offer?",
      answer: "We provide co-working spaces, state-of-the-art labs, access to industry mentors, legal and financial advisory services, prototype development support, market research assistance, and connections to our extensive network of investors and industry partners."
    },
    {
      question: "How does the selection process work?",
      answer: "Our selection process includes application review, pitch presentation, technical evaluation, and final interview rounds. We evaluate based on innovation potential, market viability, team capability, and scalability of the business model."
    },
    {
      question: "What is the equity requirement?",
      answer: "Equity requirements vary based on the program and funding amount. Typically, we take 5-15% equity for our comprehensive incubation programs. For grant-only programs, there may be no equity requirement."
    },
    {
      question: "Can international students apply?",
      answer: "Yes, we welcome applications from international students and entrepreneurs. However, certain programs may have specific eligibility criteria related to visa status and local regulations."
    },
    {
      question: "What kind of mentorship support is available?",
      answer: "We provide access to industry experts, successful entrepreneurs, technical specialists, and business advisors. Each startup is paired with relevant mentors based on their industry and specific needs, with regular one-on-one sessions and group workshops."
    },
    {
      question: "How do I track my application status?",
      answer: "Once you submit your application, you'll receive a unique tracking ID and access to our applicant portal where you can monitor your application progress, receive updates, and communicate with our team throughout the selection process."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GUIITAR Council and our programs. 
            Can't find what you're looking for? Feel free to reach out to us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl overflow-hidden hover-lift transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="pt-4 border-t border-border/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="glass-subtle rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you understand how GUIITAR Council can support your entrepreneurial journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@guiitar.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Email Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted/50 transition-colors font-medium"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;