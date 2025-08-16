import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, DollarSign, Users, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Innovation Summit 2025',
      date: '2025-03-15',
      time: '09:00 AM - 06:00 PM',
      venue: 'GSFC University Auditorium',
      image: '/api/placeholder/400/300',
      description: 'Join industry leaders, startups, and investors for a day of groundbreaking discussions on the future of innovation. Featuring keynotes, panel discussions, and networking opportunities.',
      fee: '₹2,500',
      registrationDeadline: '2025-03-10',
      guests: ['Dr. Kiran Mazumdar-Shaw', 'Ritesh Agarwal', 'Falguni Nayar'],
      category: 'Summit',
      registered: 245,
      capacity: 500
    },
    {
      id: 2,
      title: 'Startup Pitch Competition',
      date: '2025-02-28',
      time: '02:00 PM - 08:00 PM',
      venue: 'Innovation Hub',
      image: '/api/placeholder/400/300',
      description: 'Early-stage startups compete for funding and mentorship opportunities. Judges include top VCs and successful entrepreneurs.',
      fee: '₹1,000',
      registrationDeadline: '2025-02-25',
      guests: ['Kunal Bahl', 'Ankur Warikoo', 'Ghazal Alagh'],
      category: 'Competition',
      registered: 89,
      capacity: 200
    },
    {
      id: 3,
      title: 'AI & Machine Learning Workshop',
      date: '2025-04-12',
      time: '10:00 AM - 04:00 PM',
      venue: 'Tech Lab Building',
      image: '/api/placeholder/400/300',
      description: 'Hands-on workshop covering the latest trends in AI and ML. Perfect for developers, researchers, and entrepreneurs looking to leverage AI.',
      fee: '₹3,000',
      registrationDeadline: '2025-04-08',
      guests: ['Dr. Rajeev Rastogi', 'Pramod Varma', 'Kalika Bali'],
      category: 'Workshop',
      registered: 156,
      capacity: 100
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Fintech Revolution Conference',
      date: '2024-11-20',
      time: '09:00 AM - 05:00 PM',
      venue: 'Convention Center',
      image: '/api/placeholder/400/300',
      description: 'Explored the future of financial technology with industry pioneers and disruptors.',
      fee: '₹2,000',
      guests: ['Vijay Shekhar Sharma', 'Harshil Mathur', 'Lizzie Chapman'],
      category: 'Conference',
      attended: 380
    },
    {
      id: 5,
      title: 'Women in Tech Leadership Summit',
      date: '2024-10-15',
      time: '11:00 AM - 06:00 PM',
      venue: 'GSFC University',
      image: '/api/placeholder/400/300',
      description: 'Celebrating and empowering women leaders in technology and entrepreneurship.',
      fee: '₹1,500',
      guests: ['Vandana Luthra', 'Upasana Taku', 'Suchi Mukherjee'],
      category: 'Summit',
      attended: 225
    },
    {
      id: 6,
      title: 'Blockchain & Web3 Masterclass',
      date: '2024-09-08',
      time: '02:00 PM - 07:00 PM',
      venue: 'Digital Innovation Lab',
      image: '/api/placeholder/400/300',
      description: 'Deep dive into blockchain technology and Web3 applications for entrepreneurs.',
      fee: '₹2,800',
      guests: ['Nischal Shetty', 'Sandeep Nailwal', 'Balaji Srinivasan'],
      category: 'Masterclass',
      attended: 150
    }
  ];

  const handleRegister = () => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('mockUser') === '1';
    if (!isLoggedIn) {
      window.location.href = '/signin';
    } else {
      // Handle registration logic here
      alert('Registration successful! You will receive a confirmation email shortly.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-hero mb-6">
              Upcoming <span className="text-primary">Events</span>
            </h1>
            <p className="text-subtitle max-w-3xl mx-auto">
              Join us for exclusive events, workshops, and networking opportunities designed to accelerate your entrepreneurial journey.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass rounded-full p-2 flex">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeTab === 'upcoming' ? (
              upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group glass rounded-3xl overflow-hidden hover-lift smooth-transition transform transition-all duration-700 ${
                    'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <DollarSign className="w-4 h-4 mr-2" />
                        <span>{event.fee}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Guests */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Featured Guests:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.guests.map((guest, idx) => (
                          <span key={idx} className="bg-muted/50 text-xs px-2 py-1 rounded-full">
                            {guest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Registration Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-muted-foreground">
                        <Users className="w-3 h-3 inline mr-1" />
                        {event.registered}/{event.capacity} registered
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Deadline: {new Date(event.registrationDeadline).toLocaleDateString('en-IN')}
                      </div>
                    </div>

                    {/* Register Button */}
                    <button
                      onClick={handleRegister}
                      className="w-full btn-primary text-sm py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      Register Now
                    </button>
                  </div>

                  {/* Floating Accent */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-accent opacity-80 group-hover:scale-125 transition-transform duration-300" />
                </div>
              ))
            ) : (
              pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`group glass rounded-3xl overflow-hidden hover-lift smooth-transition transform transition-all duration-700 ${
                    'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Event Image - Grayscale for past events */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-muted-foreground mb-3 group-hover:text-foreground transition-colors">
                      {event.title}
                    </h3>
                    
                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    {/* Guests */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground mb-2">Featured Guests:</h4>
                      <div className="flex flex-wrap gap-1">
                        {event.guests.map((guest, idx) => (
                          <span key={idx} className="bg-muted/30 text-xs px-2 py-1 rounded-full text-muted-foreground">
                            {guest}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Attendance Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-muted-foreground">
                        <Users className="w-3 h-3 inline mr-1" />
                        {event.attended} attended
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Event completed
                      </div>
                    </div>

                    {/* View Highlights Button */}
                    <button className="w-full btn-ghost text-sm py-3 rounded-xl font-medium transition-all duration-300 border border-muted">
                      View Highlights
                    </button>
                  </div>

                  {/* Floating Accent - Muted for past events */}
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-muted opacity-40 group-hover:scale-125 transition-transform duration-300" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;