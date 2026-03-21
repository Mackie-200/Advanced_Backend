import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import logoImage from "@/assets/triconnect-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="TriConnect Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">TriConnect</h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">The Bridge Between Home and Classroom</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <Button variant="ghost" size="sm" className="gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden lg:inline">Language</span>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-background animate-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-foreground hover:text-primary transition-colors py-2 text-base"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="ghost" size="sm" className="gap-2 w-full justify-start text-base py-2">
              <Globe className="h-4 w-4" />
              Language
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;