import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const phrases = ["We incubate risk.", "We fund defiance.", "We build tomorrow."];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {Array.from({
        length: 50
      }, (_, i) => <div key={i} className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>

      {/* Mouse-Following Gradient */}
      <div className="absolute w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{
      background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
      left: `${mousePosition.x * 100}%`,
      top: `${mousePosition.y * 100}%`,
      transform: 'translate(-50%, -50%)',
      transition: 'all 0.3s ease-out'
    }} />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Subtitle */}
        <div className={`mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-2 glass-subtle rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground font-medium tracking-wide">
              The Incubation Arm of GSFC University
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className={`mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h1 className="text-cinematic mb-6 text-primary">
            <span className="block text-muted-foreground">
              {phrases[currentPhrase].split(' ').map((word, index) => <span key={`${currentPhrase}-${index}`} style={{
              animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
            }} className="inline-block mr-4 lg:mr-8 text-foreground">
                  {word}
                </span>)}
            </span>
          </h1>
          
          <p className="text-subtitle max-w-3xl mx-auto leading-relaxed">
            Where ambitious ideas meet fearless execution. We don't just support startups—
            we birth unicorns, fund the impossible, and turn visions into ventures.
          </p>
        </div>

        {/* CTA Section */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <button className="btn-primary group flex items-center space-x-3 text-lg px-12 py-5">
            <span>Launch your idea</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="btn-ghost text-lg px-12 py-5">
            Watch our story
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-muted-foreground text-sm font-medium tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>;
};
export default HeroSection;