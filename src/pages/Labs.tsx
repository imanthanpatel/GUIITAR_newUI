import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import lab images
import quantumLabImg from '@/assets/quantum-lab.jpg';
import aiLabImg from '@/assets/ai-lab.jpg';
import biotechLabImg from '@/assets/biotech-lab.jpg';
import cleanEnergyLabImg from '@/assets/clean-energy-lab.jpg';
import roboticsLabImg from '@/assets/robotics-lab.jpg';
import materialsLabImg from '@/assets/materials-lab.jpg';
import cybersecurityLabImg from '@/assets/cybersecurity-lab.jpg';
import iotLabImg from '@/assets/iot-lab.jpg';
import dataAnalyticsLabImg from '@/assets/data-analytics-lab.jpg';
import blockchainLabImg from '@/assets/blockchain-lab.jpg';
import coworkingLabImg from '@/assets/coworking-lab.jpg';
import collaborativeLabImg from '@/assets/collaborative-lab.jpg';
import privateLabImg from '@/assets/private-lab.jpg';

const Labs = () => {
  const labs = [
    {
      id: 1,
      name: "Quantum Computing Lab",
      image: quantumLabImg,
      description: "Advanced quantum research and development facility"
    },
    {
      id: 2,
      name: "AI Research Center",
      image: aiLabImg,
      description: "Cutting-edge artificial intelligence and machine learning"
    },
    {
      id: 3,
      name: "Biotech Innovation Hub",
      image: biotechLabImg,
      description: "Revolutionary biotechnology and life sciences research"
    },
    {
      id: 4,
      name: "Clean Energy Lab",
      image: cleanEnergyLabImg,
      description: "Sustainable energy solutions and green technology"
    },
    {
      id: 5,
      name: "Robotics Workshop",
      image: roboticsLabImg,
      description: "Advanced robotics and automation development"
    },
    {
      id: 6,
      name: "Materials Science Lab",
      image: materialsLabImg,
      description: "Next-generation materials and nanotechnology"
    },
    {
      id: 7,
      name: "Cybersecurity Center",
      image: cybersecurityLabImg,
      description: "Advanced threat detection and security research facility"
    },
    {
      id: 8,
      name: "IoT Development Lab",
      image: iotLabImg,
      description: "Internet of Things and smart device innovation center"
    },
    {
      id: 9,
      name: "Data Analytics Hub",
      image: dataAnalyticsLabImg,
      description: "Big data processing and machine learning analytics"
    },
    {
      id: 10,
      name: "Blockchain Research Lab",
      image: blockchainLabImg,
      description: "Distributed ledger technology and cryptocurrency research"
    }
  ];

  const coworkingSpaces = [
    {
      id: 1,
      name: "Open Co-working Lab",
      image: coworkingLabImg,
      description: "Collaborative workspace for researchers and innovators",
      capacity: 30
    },
    {
      id: 2,
      name: "Collaborative Research Lab",
      image: collaborativeLabImg,
      description: "Team-focused workspace for group research projects",
      capacity: 20
    },
    {
      id: 3,
      name: "Private Study Lab",
      image: privateLabImg,
      description: "Quiet workspace for focused individual research",
      capacity: 12
    }
  ];

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
              <span className="text-primary">Our Infrastructure</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              State-of-the-art research facilities where breakthrough innovations come to life. 
              Each lab is equipped with cutting-edge technology and world-class infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <div
                key={lab.id}
                className={`group glass rounded-3xl overflow-hidden hover-lift smooth-transition transform transition-all duration-700 ${
                  'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Lab Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Lab Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {lab.description}
                  </p>
                </div>

                {/* Floating Accent */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-primary opacity-80 group-hover:scale-125 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-working Spaces Section */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-primary">Co-working Lab</span>
            </h2>
            <p className="text-subtitle max-w-3xl mx-auto">
              Collaborative workspace designed for researchers and innovators. 
              Book your space with flexible timing for optimal productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coworkingSpaces.map((space, index) => (
              <Card
                key={space.id}
                className={`group glass rounded-3xl overflow-hidden hover-lift smooth-transition transform transition-all duration-700 ${
                  'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Space Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-accent/90 text-accent-foreground">
                    <Users className="w-3 h-3 mr-1" />
                    {space.capacity}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {space.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {space.description}
                  </p>
                  
                  {/* Capacity */}
                  <div className="flex items-center space-x-2 text-muted-foreground mb-4">
                    <Users className="w-4 h-4" />
                    <span>Up to {space.capacity} researchers</span>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" variant="default">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Your Lab
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Labs;