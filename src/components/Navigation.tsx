import { Button } from "@/components/ui/button";
import transfundLogo from "@/assets/transfund-logo.jpg";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center">
          <img 
            src={transfundLogo} 
            alt="Transformation Fund" 
            className="h-10 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#programs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Funding Programs
          </a>
          <a href="#applications" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Applications
          </a>
          <a href="#resources" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Portal Login
          </Button>
          <Button variant="cta" size="sm">
            Apply for Funding
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;