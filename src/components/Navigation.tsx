import { Button } from "@/components/ui/button";
import transfundLogo from "@/assets/transfund-logo.jpg";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={transfundLogo} 
              alt="Transformation Fund" 
              className="h-10 w-auto"
              width="180"
              height="40"
              loading="eager"
            />
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <a href="#programs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Funding Programs
            </a>
            <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <a href="/startup-grants" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded">Startup & Informal Business Grants</a>
                <a href="#growth-loans" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded">Growth & Expansion Loans</a>
                <a href="#equity-investment" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded">Equity & Co-Investment</a>
                <a href="#blended-finance" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded">Blended Finance & Guarantees</a>
              </div>
            </div>
          </div>
          <div className="relative group">
            <a href="#applications" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Applications
            </a>
            <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                <a href="/requirements" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded">Requirements</a>
                <a href="#application-process" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded">Application Process</a>
              </div>
            </div>
          </div>
          <a href="#resources" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Resources
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="https://sa-transformationfund.co.za/transformationreport.html" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Impact Report
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="https://online.sa-transformationfund.co.za" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Portal Login
            </Button>
          </a>
          <Button variant="cta" size="sm">
            Apply for Funding
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;