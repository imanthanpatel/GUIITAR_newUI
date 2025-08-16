import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Rocket, Users, Award } from 'lucide-react';

const ImpactMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    startups: 0,
    funding: 0,
    mentors: 0,
    success: 0
  });

  const metricsRef = useRef<HTMLDivElement>(null);

  const finalCounts = {
    startups: 247,
    funding: 125,
    mentors: 89,
    success: 73
  };

  const metrics = [
    {
      icon: Rocket,
      label: "Startups Launched",
      value: counts.startups,
      suffix: "+",
      color: "primary",
      description: "Revolutionary ventures born"
    },
    {
      icon: TrendingUp,
      label: "Million Raised",
      value: counts.funding,
      prefix: "$",
      suffix: "M+",
      color: "accent",
      description: "Capital deployed globally"
    },
    {
      icon: Users,
      label: "Expert Mentors",
      value: counts.mentors,
      suffix: "+",
      color: "primary",
      description: "Industry titans guiding"
    },
    {
      icon: Award,
      label: "Success Rate",
      value: counts.success,
      suffix: "%",
      color: "accent",
      description: "Dreams turned reality"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        startups: Math.min(prev.startups + Math.ceil(finalCounts.startups / steps), finalCounts.startups),
        funding: Math.min(prev.funding + Math.ceil(finalCounts.funding / steps), finalCounts.funding),
        mentors: Math.min(prev.mentors + Math.ceil(finalCounts.mentors / steps), finalCounts.mentors),
        success: Math.min(prev.success + Math.ceil(finalCounts.success / steps), finalCounts.success)
      }));
    }, interval);

    setTimeout(() => {
      clearInterval(timer);
      setCounts(finalCounts);
    }, duration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div ref={metricsRef} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-24 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-hero mb-6">
            Impact <span className="text-primary">Metrics</span>
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            Numbers that tell the story of transformation, innovation, and fearless ambition realized
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={metric.label}
                className={`group text-center transform transition-all duration-700 hover-lift ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl glass-subtle flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    metric.color === 'primary' ? 'glow-primary' : 'glow-accent'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      metric.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className={`text-4xl lg:text-5xl font-bold font-space ${
                      metric.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`}>
                      {metric.prefix}{metric.value}{metric.suffix}
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    metric.color === 'primary' ? 'bg-primary' : 'bg-accent'
                  }`} />
                </div>

                {/* Floating Accent */}
                <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full ${
                  metric.color === 'primary' ? 'bg-accent' : 'bg-primary'
                } opacity-60 group-hover:scale-125 transition-transform duration-300 float-gentle`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}
        <div className={`text-center mt-16 lg:mt-24 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <blockquote className="text-2xl lg:text-3xl font-medium text-muted-foreground italic max-w-4xl mx-auto leading-relaxed">
            "These aren't just numbers—they're proof that when you combine 
            <span className="text-primary"> audacious vision </span>
            with 
            <span className="text-accent"> relentless execution</span>, 
            magic happens."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;