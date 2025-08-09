import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border px-4 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary font-inter">
          CareerFlow
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/jobs" 
            className={`font-inter font-medium transition-colors ${
              location.pathname === '/jobs' ? 'text-accent' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Browse Jobs
          </Link>
          <Link 
            to="/dashboard" 
            className={`font-inter font-medium transition-colors ${
              location.pathname === '/dashboard' ? 'text-accent' : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Dashboard
          </Link>
          
          <Button variant="outline" className="font-inter">
            Sign In
          </Button>
          <Button className="bg-accent hover:bg-accent/90 font-inter">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;