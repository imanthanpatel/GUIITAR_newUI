import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { CheckCircle, Linkedin, Mail, FileText } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const missionTimeline = [
    {
      year: '2019',
      title: 'The Spark',
      description: 'Born from a simple belief: Indian innovation deserves world-class incubation.',
      color: 'primary'
    },
    {
      year: '2020',
      title: 'Foundation',
      description: 'Established as the incubation arm of GSFC University with a rebel manifesto.',
      color: 'accent'
    },
    {
      year: '2021',
      title: 'First Unicorn',
      description: 'Our first startup hit unicorn status, proving our unconventional methods work.',
      color: 'primary'
    },
    {
      year: '2022',
      title: 'Global Recognition',
      description: 'Featured in Forbes as "The Incubator That Thinks Different".',
      color: 'accent'
    },
    {
      year: '2023',
      title: 'Scale & Impact',
      description: '100+ startups funded, ₹500Cr+ raised, countless dreams realized.',
      color: 'primary'
    },
    {
      year: '2024',
      title: 'Tomorrow',
      description: 'Building the future, one rebellious idea at a time.',
      color: 'accent'
    }
  ];

  const teamCategories = {
    'Core Team': [
      {
        name: 'Dr. Rajesh Patel',
        role: 'Founder & CEO',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/rajeshpatel',
        resume: '/resumes/rajesh-patel-resume.pdf',
        email: 'rajesh.patel@guiitar.com'
      },
      {
        name: 'Priya Sharma',
        role: 'Co-Founder & CTO',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/priyasharma',
        resume: '/resumes/priya-sharma-resume.pdf',
        email: 'priya.sharma@guiitar.com'
      },
      {
        name: 'Arjun Mehta',
        role: 'Co-Founder & CPO',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/arjunmehta',
        resume: '/resumes/arjun-mehta-resume.pdf',
        email: 'arjun.mehta@guiitar.com'
      },
      {
        name: 'Kavya Singh',
        role: 'Head of Strategy',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/kavyasingh',
        resume: '/resumes/kavya-singh-resume.pdf',
        email: 'kavya.singh@guiitar.com'
      },
      {
        name: 'Rohit Kumar',
        role: 'Head of Operations',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/rohitkumar',
        resume: '/resumes/rohit-kumar-resume.pdf',
        email: 'rohit.kumar@guiitar.com'
      }
    ],
    'Board of Directors': [
      {
        name: 'Sarah Wilson',
        role: 'Chairperson',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/sarahwilson',
        resume: '/resumes/sarah-wilson-resume.pdf',
        email: 'sarah.wilson@guiitar.com'
      },
      {
        name: 'Amit Kumar',
        role: 'Board Member',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/amitkumar',
        resume: '/resumes/amit-kumar-resume.pdf',
        email: 'amit.kumar@guiitar.com'
      },
      {
        name: 'Dr. Maya Singh',
        role: 'Independent Director',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/mayasingh',
        resume: '/resumes/maya-singh-resume.pdf',
        email: 'maya.singh@guiitar.com'
      },
      {
        name: 'James Thompson',
        role: 'External Director',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/jamesthompson',
        resume: '/resumes/james-thompson-resume.pdf',
        email: 'james.thompson@guiitar.com'
      }
    ],
    'Advisory Board': [
      {
        name: 'Ravi Gupta',
        role: 'Technology Advisor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/ravigupta',
        resume: '/resumes/ravi-gupta-resume.pdf',
        email: 'ravi.gupta@guiitar.com'
      },
      {
        name: 'Sunita Reddy',
        role: 'Business Advisor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/sunitareddy',
        resume: '/resumes/sunita-reddy-resume.pdf',
        email: 'sunita.reddy@guiitar.com'
      },
      {
        name: 'David Chen',
        role: 'International Advisor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/davidchen',
        resume: '/resumes/david-chen-resume.pdf',
        email: 'david.chen@guiitar.com'
      },
      {
        name: 'Maria Rodriguez',
        role: 'Marketing Advisor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/mariarodriguez',
        resume: '/resumes/maria-rodriguez-resume.pdf',
        email: 'maria.rodriguez@guiitar.com'
      },
      {
        name: 'Ahmed Hassan',
        role: 'Finance Advisor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/ahmedhassan',
        resume: '/resumes/ahmed-hassan-resume.pdf',
        email: 'ahmed.hassan@guiitar.com'
      }
    ],
    'Faculty Mentors': [
      {
        name: 'Dr. Neha Joshi',
        role: 'Academic Mentor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/nehajoshi',
        resume: '/resumes/neha-joshi-resume.pdf',
        email: 'neha.joshi@guiitar.com'
      },
      {
        name: 'Prof. Suresh Iyer',
        role: 'Research Mentor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/sureshiyer',
        resume: '/resumes/suresh-iyer-resume.pdf',
        email: 'suresh.iyer@guiitar.com'
      },
      {
        name: 'Dr. Anita Desai',
        role: 'Innovation Mentor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/anitadesai',
        resume: '/resumes/anita-desai-resume.pdf',
        email: 'anita.desai@guiitar.com'
      },
      {
        name: 'Prof. Rajesh Khanna',
        role: 'Entrepreneurship Mentor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/rajeshkhanna',
        resume: '/resumes/rajesh-khanna-resume.pdf',
        email: 'rajesh.khanna@guiitar.com'
      }
    ],
    'Industry Mentors': [
      {
        name: 'Vikram Shah',
        role: 'Industry Expert',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/vikramshah',
        resume: '/resumes/vikram-shah-resume.pdf',
        email: 'vikram.shah@guiitar.com'
      },
      {
        name: 'Meera Agarwal',
        role: 'Startup Mentor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/meeraagarwal',
        resume: '/resumes/meera-agarwal-resume.pdf',
        email: 'meera.agarwal@guiitar.com'
      },
      {
        name: 'Sanjay Bansal',
        role: 'Tech Industry Veteran',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/sanjaybansal',
        resume: '/resumes/sanjay-bansal-resume.pdf',
        email: 'sanjay.bansal@guiitar.com'
      },
      {
        name: 'Lisa Park',
        role: 'Silicon Valley Expert',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/lisapark',
        resume: '/resumes/lisa-park-resume.pdf',
        email: 'lisa.park@guiitar.com'
      },
      {
        name: 'Rajiv Malhotra',
        role: 'Product Mentor',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/rajivmalhotra',
        resume: '/resumes/rajiv-malhotra-resume.pdf',
        email: 'rajiv.malhotra@guiitar.com'
      }
    ],
    'Technical Associates': [
      {
        name: 'Karan Malhotra',
        role: 'Technical Lead',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/karanmalhotra',
        resume: '/resumes/karan-malhotra-resume.pdf',
        email: 'karan.malhotra@guiitar.com'
      },
      {
        name: 'Pooja Sharma',
        role: 'Software Engineer',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/poojasharma',
        resume: '/resumes/pooja-sharma-resume.pdf',
        email: 'pooja.sharma@guiitar.com'
      },
      {
        name: 'Akash Verma',
        role: 'DevOps Engineer',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/akashverma',
        resume: '/resumes/akash-verma-resume.pdf',
        email: 'akash.verma@guiitar.com'
      },
      {
        name: 'Sneha Patel',
        role: 'Frontend Developer',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/snehapatel',
        resume: '/resumes/sneha-patel-resume.pdf',
        email: 'sneha.patel@guiitar.com'
      },
      {
        name: 'Rahul Singh',
        role: 'Backend Developer',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/rahulsingh',
        resume: '/resumes/rahul-singh-resume.pdf',
        email: 'rahul.singh@guiitar.com'
      }
    ],
    'Student Team': [
      {
        name: 'Isha Verma',
        role: 'Student Coordinator',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/ishaverma',
        resume: '/resumes/isha-verma-resume.pdf',
        email: 'isha.verma@guiitar.com'
      },
      {
        name: 'Arpit Agarwal',
        role: 'Student Representative',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/arpitagarwal',
        resume: '/resumes/arpit-agarwal-resume.pdf',
        email: 'arpit.agarwal@guiitar.com'
      },
      {
        name: 'Nisha Gupta',
        role: 'Events Coordinator',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/nishagupta',
        resume: '/resumes/nisha-gupta-resume.pdf',
        email: 'nisha.gupta@guiitar.com'
      },
      {
        name: 'Varun Jain',
        role: 'Tech Lead Student',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/varunjain',
        resume: '/resumes/varun-jain-resume.pdf',
        email: 'varun.jain@guiitar.com'
      },
      {
        name: 'Priyanka Modi',
        role: 'Community Outreach',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/priyankamodi',
        resume: '/resumes/priyanka-modi-resume.pdf',
        email: 'priyanka.modi@guiitar.com'
      },
      {
        name: 'Harsh Patel',
        role: 'Marketing Student',
        image: '/placeholder.svg',
        linkedin: 'https://www.linkedin.com/in/harshpatel',
        resume: '/resumes/harsh-patel-resume.pdf',
        email: 'harsh.patel@guiitar.com'
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState<string>('Core Team');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8">
            Why GUIITAR <span className="text-primary">Exists</span>
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            This isn't a corporate origin story. It's the tale of rebels who refused to accept 
            that Indian startups should settle for anything less than extraordinary.
          </p>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">Our <span className="text-primary">Mission</span> Unfolds</h2>
          
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
            
            <div className="space-y-20">
              {missionTimeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-item flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} transition-all duration-700 ${
                    visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  data-index={index}
                >
                  <div className="flex-1 px-8">
                    <div className={`glass p-8 rounded-2xl hover-lift ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`text-6xl font-bold text-${item.color} mb-4`}>{item.year}</div>
                      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full bg-${item.color} border-4 border-background shadow-lg`}></div>
                  </div>
                  
                  <div className="flex-1 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 px-6 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-accent">Team</span></h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.keys(teamCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium smooth-transition ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow-primary'
                    : 'glass-subtle hover:bg-muted'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Team Members Carousel */}
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {teamCategories[selectedCategory as keyof typeof teamCategories].map((member, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group">
                      <div className="relative overflow-hidden rounded-2xl glass hover-lift">
                        {/* Portrait */}
                        <div className="relative h-64 bg-muted/20 rounded-t-2xl overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                          <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                          
                          {/* Contact Links */}
                          <div className="flex items-center gap-4">
                            <a 
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/link"
                              title="LinkedIn Profile"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                            
                            <a 
                              href={member.resume}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-accent hover:text-accent-foreground transition-all duration-300 group/link"
                              title="View Resume"
                            >
                              <FileText className="w-4 h-4" />
                            </a>
                            
                            <a 
                              href={`mailto:${member.email}`}
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 group/link"
                              title="Send Email"
                            >
                              <Mail className="w-4 h-4" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 bg-background/80 backdrop-blur-sm border-muted hover:bg-background" />
              <CarouselNext className="right-0 bg-background/80 backdrop-blur-sm border-muted hover:bg-background" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Why GUIITAR Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-8">The <span className="text-primary">Real</span> Story</h2>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                It started with frustration. Three friends, watching brilliant Indian minds 
                struggle with outdated incubation models that treated innovation like a 
                manufacturing process.
              </p>
              
              <p>
                "Why do we have to choose between playing it safe and playing to win?" 
                That question haunted us through countless late-night conversations in 
                college corridors.
              </p>
              
              <div className="glass p-8 rounded-2xl my-12 border-l-4 border-primary">
                <p className="text-foreground font-medium text-xl mb-4">
                  "We realized the problem wasn't with Indian entrepreneurs—it was with 
                  how we were supporting them."
                </p>
                <cite className="text-primary">— Dr. Rajesh Patel, Founder</cite>
              </div>
              
              <p>
                So we built GUIITAR. Not as another incubator, but as a rebellion against 
                mediocrity. We fund the crazy. We back the rebels. We turn "impossible" 
                into "inevitable."
              </p>
              
              <p>
                Every startup we support isn't just a business—it's a statement that 
                Indian innovation belongs on the world stage, not in the shadows.
              </p>
              
              <div className="text-center mt-16">
                <div className="inline-flex items-center space-x-4 glass-subtle rounded-full px-8 py-4">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="font-medium">This is our story. What's yours?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;