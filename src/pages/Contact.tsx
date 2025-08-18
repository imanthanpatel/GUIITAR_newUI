import { useState, useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageCircle, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversation, setConversation] = useState([
    {
      id: 1,
      sender: 'GUIITAR',
      message: "Hey there! 👋 Ready to change the world? What's your big idea?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [73.1812, 22.3072], // Vadodara coordinates
        zoom: 13,
        pitch: 45,
      });

      // Add a custom marker for GUIITAR office
      const marker = new mapboxgl.Marker({
        color: '#3B82F6' // Primary color
      })
        .setLngLat([73.1812, 22.3072])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-4">
                <h3 class="font-bold text-lg mb-2">GUIITAR Council</h3>
                <p class="text-sm text-gray-600">GSFC University Campus<br>Vadodara, Gujarat</p>
              </div>
            `)
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Invalid Mapbox token. Please check your token and try again.');
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: conversation.length + 1,
      sender: 'You',
      message: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversation(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate response after a delay
    setTimeout(() => {
      const responses = [
        "That sounds incredible! Tell me more about the problem you're solving. 🤔",
        "Love the passion! What stage is your startup in right now? 🚀",
        "Fascinating! Have you validated this with potential customers? 💡",
        "This could be huge! What kind of support are you looking for? 🎯",
        "Amazing vision! Let's schedule a proper chat. When works for you? 📅"
      ];
      
      const responseMessage = {
        id: conversation.length + 2,
        sender: 'GUIITAR',
        message: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setConversation(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const quickResponses = [
    "I have a tech startup idea",
    "Looking for funding",
    "Need mentorship",
    "Want to schedule a meeting"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-hero mb-8">
            Let's <span className="text-primary">talk</span>.
          </h1>
          <p className="text-subtitle mb-12 max-w-3xl mx-auto">
            This isn't a contact form. It's the beginning of your entrepreneurial journey. 
            Start the conversation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Chat Interface and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Chat Interface */}
          <div>
            <div className="glass rounded-2xl p-6 h-96 flex flex-col">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-border/30">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">GUIITAR Team</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-muted-foreground">Online now</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {conversation.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl ${
                        msg.sender === 'You'
                          ? 'bg-primary text-primary-foreground'
                          : 'glass-subtle'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'You' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="glass-subtle px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Responses */}
              <div className="flex flex-wrap gap-2 mb-4">
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(response)}
                    className="text-xs glass-subtle rounded-full px-3 py-1 hover:bg-hover transition-colors"
                  >
                    {response}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 glass-subtle rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleSendMessage}
                  className="btn-primary p-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="glass-subtle rounded-lg p-4 flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Visit us</p>
                <p className="text-sm text-muted-foreground">GSFC University Campus, Vadodara, Gujarat</p>
              </div>
            </div>

            <div className="glass-subtle rounded-lg p-4 flex items-center space-x-4">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Call us</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="glass-subtle rounded-lg p-4 flex items-center space-x-4">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium">Email us</p>
                <p className="text-sm text-muted-foreground">hello@guiitarcouncil.com</p>
              </div>
            </div>

            <div className="glass-subtle rounded-lg p-4 flex items-center space-x-4">
              <Clock className="w-5 h-5 text-accent" />
              <div>
                <p className="font-medium">Office hours</p>
                <p className="text-sm text-muted-foreground">Mon-Fri: 9 AM - 6 PM IST</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl overflow-hidden">
            {showTokenInput ? (
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Interactive Map</h3>
                <p className="text-muted-foreground mb-6">
                  To view our location on the map, please enter your Mapbox public token.
                  Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
                </p>
                <div className="space-y-4">
                  <input
                    type="text"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    placeholder="Enter your Mapbox public token..."
                    className="w-full glass-subtle rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    onClick={initializeMap}
                    className="btn-primary w-full"
                  >
                    Load Map
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div ref={mapContainer} className="h-96 w-full" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background/20 rounded-b-2xl"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;