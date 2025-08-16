import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Subtle 404 Illustration */}
        <div className="mb-12">
          <div className="text-6xl font-bold text-orange-500 mb-6 opacity-70">404</div>
          <h1 className="text-2xl font-medium text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Return Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition"
        >
          <Home className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
